import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'nike',
  ): string {
    return `products limit => ${limit} and offset => ${offset} and brand => ${brand}`;
  }

  @Get('/filter')
  getProductFilter() {
    return 'I am a filter';
  }

  @Get('/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }
}
