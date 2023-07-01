import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories = [
    {
      id: 1,
      name: 'Category 1',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(payload: any) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: any) {
    const category = this.findOne(id);
    if (category) {
      const index = this.categories.findIndex((item) => item.id === id);
      this.categories[index] = { ...category, ...payload };
      return this.categories[index];
    }
    return null;
  }

  delete(id: number) {
    this.findOne(id);
    const index = this.categories.findIndex((item) => item.id === id);
    this.categories.splice(index, 1);
    return true;
  }
}
