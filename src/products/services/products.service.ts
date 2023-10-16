import { Injectable } from '@nestjs/common';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'P1', price: 12, stock: 5 },
    { id: 2, name: 'P1', price: 12, stock: 5 }
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getHola(): string {
    return 'Hola';
  }

  getProducts(): any {
    return this.products;
  }

  getProduct(id: number) {
    const porduct = this.products.find((product) => product.id === id);
    if (porduct) {
      return porduct;
    } else {
      console.log('No existe el producto');
    }
  }

  createProduct(datos: Product): any {
    try {
      this.products.push(datos);
      return datos;
    } catch (error) {
      console.log(error);
    }
  }

  updateProduct(id: number, data): any {
    let newProduct: {
      id: number;
      name: string;
      price: number;
      stock: number;
    };
    try {
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
    } catch (error) {
      throw new Error(`Error al editar el producto ${error}`);
    }
  }

  deleteProduct(id: number): any {
    try {
      const deletedProduct = this.products.filter(
        (product) => product.id === +id
      );
      // console.log(...deletedProduct)

      const newArray = this.products.filter((product) => product.id !== +id);
      this.products = newArray;
      return deletedProduct[0];
    } catch (error) {
      throw new Error(`Error al eliminar el producto ${error}`);
    }
  }

  // sendData(datos): any {
  //   return datos;
  // }
}
