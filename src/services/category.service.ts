import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../models/entities/category';
import { Repository } from 'typeorm';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { Observable } from 'rxjs';
import { BaseSetupViewModel } from '../models/view-models/base-setup.view.model';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findGridData(request: DataTableRequestModel) : Promise<DataAbleViewModel<Category>>{
    const gridData: DataAbleViewModel<Category> = new DataAbleViewModel<Category>();
    const searchKeyPattern = new RegExp('.*' + request.search.value + '.*', "i");
    const query: FindManyOptions<Category> = {
      where: {title: searchKeyPattern},
      skip: request.start,
      take: request.length,
      order: {
        [request.columns[request.order[0].column].data] : request.order[0].dir.toUpperCase()
      },
    };
    const data = await this.categoryRepository.findAndCount( query );
    gridData.recordsTotal = await this.categoryRepository.count();
    gridData.data = data[0];
    gridData.recordsFiltered = data[1];
    return gridData;
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoryRepository.findOne(id);
  }

  async save(category: Category): Promise<Category>{
    return await  this.categoryRepository.save(category)
  }

  async remove(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }

  async getSetupData(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }
}
