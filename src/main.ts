import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      skipMissingProperties: true,
    }),
  );

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Servidor rodando na porta ${process.env.PORT ?? 3000}`);
  console.log(
    `API disponível em: http://localhost:${process.env.PORT ?? 3000}/users`,
  );
}
bootstrap().catch((error) =>
  console.error('Erro ao iniciar aplicação:', error),
);
