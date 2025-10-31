import { Controller, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  add(body: any) {
}
}