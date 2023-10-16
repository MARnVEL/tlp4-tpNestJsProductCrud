import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
      isGlobal: true
    }),
    ProductsModule
  ]
  // controllers: [AppController],
  // providers: [AppService]
})
export class AppModule {}
