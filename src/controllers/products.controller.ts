import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'nike',
  ) {
    return {
      message: `products limit => ${limit} and offset => ${offset} and brand => ${brand}`,
    };
  }

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'I am a filter',
    };
  }

  @Get('/:productId')
  getOne(@Param('productId') productId: string) {
    return {
      message: `product ${productId}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create action',
      payload,
    };
  }
}
