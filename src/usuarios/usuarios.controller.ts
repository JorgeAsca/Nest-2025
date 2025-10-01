import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUserDto } from './Dtos/create-user.dto';

@Controller('usuarios')
export class UsuariosController {
  //Solo se inyectan clases con el decorador @Injectable
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get() /*Empoit raiz*/ getHome() {
    return 'Home de la seccion usuarios';
  }

  // Si el metoodo no tiene decorador es un empoit
  @Get('all') /*Empoit raiz*/ getAll() {
    return this.usuariosService.findAll();
  }

  // @Get("New")
  // getNew() {
  //   return this.usuariosService.new();
  // }

  @Post('New')
  add(@Body() Userdto: CreateUserDto) {
    console.log("usuario recibido", Userdto);
  
  }

  //Metodo interno porque no tiene decorador @Get o similar
  delete() {
    return 'Nueva lista de usuarios';
  }
}
