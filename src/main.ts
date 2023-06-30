import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // This will remove any extra properties that are not in the DTO
      forbidNonWhitelisted: true, // This will throw an error if there are extra properties that are not in the DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
