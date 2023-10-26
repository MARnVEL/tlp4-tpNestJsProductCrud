import { ProductDTO, ProductUpdateDTO } from './../dto/product.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { MongoIdPipe } from 'src/common/pipes/mongo-id.pipe';

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

  @Get(':id')
  getProduct(@Param('id', MongoIdPipe) _id: string): any {
    // const parsedId = Number(id);
    return this.productsService.getProduct(_id);
  }

  @Post()
  createProduct(@Body() prodcut: ProductDTO): any {
    return this.productsService.createProduct(prodcut);
  }

  // TODO: Ver cómo hacer para que el actualizar me retorne el nuevo documento
  @Patch(':id')
  updateProduct(@Param('id', MongoIdPipe) id: string, @Body() infoUpdate: ProductUpdateDTO ) {
    this.productsService.updateProduct(id, infoUpdate)
    // return this.productsService.updateProduct(id, data);
  }

  @Delete('/:id')
  deleteProduct(@Param('id', MongoIdPipe) id: string): any {
    return this.productsService.deleteProduct(id);
  }
}
