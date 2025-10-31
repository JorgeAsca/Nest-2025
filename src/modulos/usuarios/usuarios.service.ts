import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './Entity/Usuario.entity.js';
import { CreateUserDto } from './Dtos/create-user.dto.js';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    return usuario;
  }

  async new(usuarioDTO: CreateUserDto): Promise<Usuario> {
    const nuevoUsuario = this.usuarioRepository.create(usuarioDTO);
    return this.usuarioRepository.save(nuevoUsuario);
  }
}
