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
  // ParseIntPipe
} from '@nestjs/common';

import { CreateProductDto, UpdateProductDto } from './../dtos/products.dtos';

// import { ParseIntPipe } from './../common/parse-int.pipe.ts';

import { Response } from 'express';
import { ProductsService } from './../services/products.service';
import { ParseIntPipe } from './../common/parse-int/parse-int.pipe';

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
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
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
