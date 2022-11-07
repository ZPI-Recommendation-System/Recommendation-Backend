import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "*" });

  const config = new DocumentBuilder()
    .setTitle("ZPI Recommendation API docs")
    .setDescription("ZPI Recommendation System API Swagger")
    .setVersion("1.0")
    .addTag("zpi")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}

bootstrap();
