import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options= new DocumentBuilder()
  .setTitle('Api documents')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('TaskController')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options, {
    include:[UsersModule],
  })
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
