import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

export const handleException = (error: any) => {
  console.log(error);
  console.trace(error);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'debug', 'error', 'verbose', 'warn'],
  });
  app.enableCors({ origin: '*' });

  const config = new DocumentBuilder()
    .setTitle('ZPI Recommendation API docs')
    .setDescription('ZPI Recommendation System API Swagger')
    .setVersion('1.0')
    .addTag('zpi')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  await app.listen(3000);
}

bootstrap();
