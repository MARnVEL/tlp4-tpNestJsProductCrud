import * as morgan from 'morgan';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  ConfigModule.forRoot({
    envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
  });
  const configService = new ConfigService();

  app.enableCors(CORS);

  app.setGlobalPrefix('api');

  await app.listen(configService.get('PORT'), () =>
    console.log(
      `Server running on port ${configService.get('PORT')}.
      Go to http://localhost:${configService.get('PORT')}`
    )
  );
  // await app.listen(configService.get('PORT'));
  console.log(`Application running on: ${await app.getUrl()}`);
}
bootstrap();
