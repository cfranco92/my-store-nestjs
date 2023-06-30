import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // constructor() {}

  @Get()
  getCategories() {
    return [];
  }

  @Get(':categoryId')
  getOne() {
    return {};
  }

  @Post()
  create() {
    return {};
  }

  @Put(':id')
  update() {
    return {};
  }

  @Delete(':id')
  delete() {
    return {};
  }
}
