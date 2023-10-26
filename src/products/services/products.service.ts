import { v4 as uuid } from 'uuid'
import { Model, ModifyResult } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ProductDTO, ProductUpdateDTO } from '../dto/product.dto';
import { Product } from './../schemas/products.schema';

// import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  getHello(): string {
    return 'Hello World!';
  }

  getHola(): string {
    return 'Hola';
  }

  getProducts(): Promise<Product[]> {
    return this.productModel.find().exec()
  }

  async getProduct(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  createProduct(product: ProductDTO): Promise<Product> {
    try {
      const createdProduct = new this.productModel(product)
      return createdProduct.save()
    } catch (error) {
      console.log(error);
    }
  }

  async updateProduct(id: string, infoUpdate: ProductUpdateDTO) {
    return await this.productModel.findByIdAndUpdate(id, infoUpdate, { new: true })
  }

/*
  deleteProduct( id: string ): any {
    try {
      const deletedProduct = this.products.filter(
        (product) => product.id === id
      );
      // console.log(...deletedProduct)

      const newArray = this.products.filter((product) => product.id !== id);
      this.products = newArray;
      return deletedProduct[0];
    } catch (error) {
      throw new Error(`Error al eliminar el producto ${error}`);
    }
  }
*/
  // sendData(datos): any {
  //   return datos;
  // }
}
