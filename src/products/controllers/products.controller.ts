import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('/hello')
  getHello(): string {
    return this.productsService.getHello();
  }
  @Get('/hola')
  getHello2(): string {
    return this.productsService.getHola();
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get('/:id')
  getProduct(@Param('id') id: number): any {
    const parsedId = Number(id);
    return this.productsService.getProduct(parsedId);
  }

  @Post()
  createProduct(@Body() datos): any {
    return this.productsService.createProduct(datos);
  }

  @Put('/:id')
  updateProduct(@Param('id') id: number, @Body() data): any {
    return this.productsService.updateProduct(id, data);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): any {
    return this.productsService.deleteProduct(id);
  }

  // @Post()
  // sendData(@Body() datos): any {
  //   return datos;
  // }
}
