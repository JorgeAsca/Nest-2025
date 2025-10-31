import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service.js';
import { CreateUserDto } from './Dtos/create-user.dto.js';

@Controller('usuarios')
export class UsuariosController {
  //inyectar el servicio UsuariosService en UsuariosController
  //solo se inyectan clases con el decorador @Injectable
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get() /* endponit raiz -- home */
  getHome(){
    return 'home del seccion usuarios'
  }

  @Get('all') /* endponit raiz */
  getAll(){
    return this.usuariosService.findAll();
  }
  //Métodos ENDPOINT --> DECORADOR get, post, put, delete...
  @Post('new') /* endponit raiz */
  add(@Body() usuarioDTO: CreateUserDto){
    console.log('Usuario recibido', usuarioDTO);
    return this.usuariosService.new(usuarioDTO);
  }

  @Get(':id') 
  findOne(@Param('id') id: string){
    console.log(id);
    return this.usuariosService.findOne(id);
  }
  

  @Delete(':id')
  delete(@Param('id') id: string){
    return 'borrado de usuarios'
  }
}