import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './Entity/cliente.entity.js';
import { CreateClienteDto } from './dto/cliente.dto.js';

@Injectable()
export class ClientesService {
    //servicio --> Repositorio (inyectar repositorio)
    //repositorio --> SGBD (base de datos)
    constructor(
        @InjectRepository(Cliente) 
        private readonly clientesRepository: Repository<Cliente>
    ){
        // codigo contructor servicio
    }

    async new (cliente: Cliente){ //cliente: DTO/Ifaz
        // transformar el objeto cliente DTO/Ifaz en una entidad cliente (Entity<Cliente)
        const cliente_data = this.clientesRepository.create(cliente);
        await this.clientesRepository.save(cliente_data);
        return {
            status: true,
            code: 200,
            msg: 'Cliente creado',
            data: cliente
        }
    }
}
