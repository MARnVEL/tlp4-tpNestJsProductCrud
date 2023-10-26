import { v4 as uuid } from 'uuid'
import { Model, ModifyResult } from 'mongoose';

import { Injectable, Delete } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ProductDTO, ProductUpdateDTO } from '../dto/product.dto';
import { Product, ProductDocument } from './../schemas/products.schema';
import { NotFoundError } from 'rxjs';
import { ErrorManager } from 'src/common/utils/error.manager';

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

  async getProducts(): Promise<Product[]> {
    try {
      const products: Product[] = await this.productModel
        .find().
        populate('category', {
          __v: 0,
          createdAt: 0
        })
        .exec();

      if (products.length === 0) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontró resultado'
        })
      }

      return products;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message)
    }
  }

  async getProduct(id: string): Promise<ProductDocument> {

    try {
      const product = await this.productModel.findById(id).populate('category', {__v: 0})
      if (!product) {
        throw new ErrorManager({
          type:'BAD_REQUEST',
          message: 'No se encontró resultado'
        })
      }
      return product
    } catch (error) {
      console.log(error);
      
    }
    
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


  async deleteProduct( id: string ) {
    console.log('El id dentro del service deleteProdut: ', id);
    
    try {
      console.log('Dentro del try');
      await this.productModel.findByIdAndDelete(id)
    } catch (error) {
      throw new Error(`Error al eliminar el producto ${error}`);
    }
  }

}
