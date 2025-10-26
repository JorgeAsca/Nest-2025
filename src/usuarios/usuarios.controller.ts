import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUserDto } from './Dtos/create-user.dto';

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
    
   // return this.usuariosService.new(usuario);
  }

  @Get(':id') 
  findOne(@Param('id') id: string){
    console.log(id);
  }
  



  delete(){
    return 'borrado de usuarios'
  }
}