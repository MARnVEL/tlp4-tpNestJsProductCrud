
import * as morgan from "morgan";

import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from "./constants";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));
  const configService = app.get(ConfigService);
  app.enableCors(CORS);
  app.setGlobalPrefix('api');

  await app.listen(
    configService.get('PORT'),
    () => console.log(
      `Server running on port ${configService.get('PORT')}.
      Go to http://localhost:${configService.get('PORT')}`)
    );
}
bootstrap();
