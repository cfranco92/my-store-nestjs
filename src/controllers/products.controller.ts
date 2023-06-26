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
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Res() response: Response, @Param('productId') productId: string) {
    // return {
    //   message: `product ${productId}`,
    // };
    response.status(200).send({
      message: `product ${productId}`,
    });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create action',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string) {
    return {
      message: `Product ${id} has been deleted`,
    };
  }
}
