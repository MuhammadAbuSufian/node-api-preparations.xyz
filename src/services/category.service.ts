import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/entities/user.model';
import { Repository } from 'typeorm';
import { Category } from '../models/entities/category';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }
  save(category: Category): Promise<any>{
    return  this.categoryRepository.save(category)
  }

  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
