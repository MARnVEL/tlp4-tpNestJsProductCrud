import { v4 as uuid } from 'uuid'
import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ProductDTO } from '../dto/product.dto';
import { Product } from './../schemas/products.schema';

// import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  /*
  private products: Product[] = [
    { id: uuid(), name: 'P1', price: 12, stock: 5 },
    { id: uuid(), name: 'P1', price: 12, stock: 5 }
  ];
  */

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
    // const porduct = this.products.find((product) => product.id === id);
    // if (porduct) {
    //   return porduct;
    // } else {
    //   console.log('No existe el producto');
    // }
    return this.productModel.findById({id})
  }

  createProduct(product: ProductDTO): Promise<Product> {
    try {
      const createdProduct = new this.productModel(product)
      return createdProduct.save()
    } catch (error) {
      console.log(error);
    }
  }

/* 
  updateProduct(id: string, data): any {
    let newProduct: {
      id: string;
      name: string;
      price: number;
      stock: number;
    };
    try {
      this.products.map((product) => {
        if (product.id === id) {
          product.name = data.name;
          product.price = data.price;
          product.stock = data.stock;
          newProduct = product;
          // return product;
        }
        // return newProduct;
      });
      return newProduct;
    } catch (error) {
      throw new Error(`Error al editar el producto ${error}`);
    }
  }

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
