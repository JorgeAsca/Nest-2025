import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // habilitamos los DTOs
  app.useGlobalPipes(
    new ValidationPipe({ 
      whitelist: true, // Elimina las propiedades que no estan en el DTO
      forbidNonWhitelisted: true, // Si viene una propiedad que no esta en el DTO da error
      transform: true // Transforma los tipos de los DTOs (DTOs)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
