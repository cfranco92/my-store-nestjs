import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/new')
  newEndpoint(): string {
    return 'I am a new endpoint';
  }

  @Get('/route')
  hello(): string {
    return 'with /sas/';
  }

  @Get('/products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'nike',
  ): string {
    return `products limit => ${limit} and offset => ${offset} and brand => ${brand}`;
  }

  @Get('/products/filter')
  getProductFilter() {
    return 'I am a filter';
  }

  @Get('/products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('/categories/:categoryId/products/:productId')
  getProductByCategory(
    @Param('productId') productId: string,
    @Param('categoryId') categoryId: string,
  ) {
    return `product ${productId} and category ${categoryId}`;
  }
}
