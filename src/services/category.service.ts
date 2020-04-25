import { Injectable } from '@nestjs/common';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { Observable } from 'rxjs';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from 'mongoose';
import {Category} from "../models/mongoose-schema/catagories.model";


@Injectable()
export class CategoryService {
  constructor(
      @InjectModel('categories') private readonly categoryModel: Model<Category>
  ) {}

  async findGridData(request: DataTableRequestModel) : Promise<DataAbleViewModel<Category>>{
    // const gridData: DataAbleViewModel<Category> = new DataAbleViewModel<Category>();
    // const searchKeyPattern = new RegExp('.*' + request.search.value + '.*', "i");
    // const query: FindManyOptions<Category> = {
    //   where: {title: searchKeyPattern},
    //   skip: request.start,
    //   take: request.length,
    //   order: {
    //     [request.columns[request.order[0].column].data] : request.order[0].dir.toUpperCase()
    //   },
    // };
    // const data = await this.categoryRepository.findAndCount( query );
    // gridData.recordsTotal = await this.categoryRepository.count();
    // gridData.data = data[0];
    // gridData.recordsFiltered = data[1];
    // return gridData;
    return null;
  }

  async findOne(id: string): Promise<Category> {
    // return await this.categoryRepository.findOne(id);
    return null;
  }

  async save(category: Category): Promise<Category>{
    return await this.categoryModel.save(category);
  }

  async remove(id: string): Promise<void> {
    // await this.categoryRepository.delete(id);
    return null;
  }

  async getSetupData(): Promise<Category[]> {
    // return await this.categoryRepository.find();
    return null;
  }
}
