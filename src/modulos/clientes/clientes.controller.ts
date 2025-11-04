import { Controller, Post, Body } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';
import { CreateClienteDto } from './dto/cliente.dto.js';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  // @Post("New")
  // create(@Body() createClienteDto: CreateClienteDto) {
  //   return this.clientesService.create(createClienteDto);
  // }
}