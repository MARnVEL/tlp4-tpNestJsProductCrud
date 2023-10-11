import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private products = [
    { id: 1, name: 'P1', price: 12, stock: 5 },
    { id: 2, name: 'P1', price: 12, stock: 5 },
  ];
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hola')
  getHello2(): string {
    return this.appService.getHola();
  }

  @Get('/product')
  getProducts(): any {
    return this.products;
  }

  @Get('/product/:id')
  getProduct(@Param('id') id: number): any {
    return this.products.find((product) => product.id === +id);
  }

  @Post('product')
  createProduct(@Body() datos): any {
    this.products.push(datos);
    return datos;
  }

  @Delete('product/:id')
  deleteProduct(@Param('id') id: number): any {
    return this.products.filter((product) => product.id !== +id);
  }

  @Put('product/:id')
  updateProduct(@Param('id') id: number, @Body() data): any {
    let newProduct: { id: number; name: string; price: number; stock: number };

    this.products.map((product) => {
      if (product.id === +id) {
        product.name = data.name;
        product.price = data.price;
        product.stock = data.stock;
        newProduct = product;
        // return product;
      }
      // return newProduct;
    });
    return newProduct;
  }

  @Post()
  sendData(@Body() datos): any {
    return datos;
  }
}
