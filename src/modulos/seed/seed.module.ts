import { Module } from '@nestjs/common';
import { SeedService } from './seed.service.js';
import { SeedController } from './seed.controller.js';
import { Client } from 'pg';
import { ClientesModule } from '../clientes/clientes.module.js';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ClientesModule],
})
export class SeedModule {}
