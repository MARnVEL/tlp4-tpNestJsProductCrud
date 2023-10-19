import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   envFilePath: `.${process.env.NODE_ENV.trim()}.env`,
    //   isGlobal: true
    // }),
    MongooseModule.forRoot('mongodb://127.0.0.1/nest'),
    ProductsModule
  ] 
})
export class AppModule {}
