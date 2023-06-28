import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand = 'nike',
  ) {
    // return {
    //   message: `products limit => ${limit} and offset => ${offset} and brand => ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'I am a filter',
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId') productId: string) {
    return this.productsService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    this.productsService.update(+id, payload);

    return {
      message: `Product with id ${id} has been updated`,
    };
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string) {
    this.productsService.delete(+id);

    return {
      message: `Product with id ${id} deleted`,
    };
  }
}
