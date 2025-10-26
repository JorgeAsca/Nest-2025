import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsuariosModule, } from './usuarios/usuarios.module.js';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
    }),
    UsuariosModule],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {

  constructor(private readonly configService: ConfigService) {}

}
