import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../models/entities/category';
import { Repository } from 'typeorm';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findGridData(request: DataTableRequestModel){
    const gridData: DataAbleViewModel<Category> = new DataAbleViewModel<Category>();
    const queryBuilder = this.categoryRepository.find( 'BCS' ).getMany;
    const abc = await   queryBuilder.getMany();

    return abc;
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
