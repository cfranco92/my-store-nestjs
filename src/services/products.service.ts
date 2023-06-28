import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'A',
      description: 'Description A',
      price: 10,
      stock: 10,
      image: '',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);

    return newProduct;
  }

  update(id: number, product) {
    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = product;
  }

  delete(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    this.products.splice(index, 1);
  }
}
