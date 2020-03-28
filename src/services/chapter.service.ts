import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { Chapter } from '../models/entities/chapter';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
  ) {}

  async findGridData(request: DataTableRequestModel) : Promise<DataAbleViewModel<Chapter>>{
    const gridData: DataAbleViewModel<Chapter> = new DataAbleViewModel<Chapter>();
    const searchKeyPattern = new RegExp('.*' + request.search.value + '.*', "i");
    const query: FindManyOptions<Chapter> = {
      where: {title: searchKeyPattern},
      skip: request.start,
      take: request.length,
      order: {
        [request.columns[request.order[0].column].data] : request.order[0].dir.toUpperCase()
      },
    };
    const data = await this.chapterRepository.findAndCount( query );
    gridData.recordsTotal = await this.chapterRepository.count();
    gridData.data = data[0];
    gridData.recordsFiltered = data[1];
    return gridData;
  }

  async findOne(id: string): Promise<Chapter> {
    return await this.chapterRepository.findOne(id);
  }

  async save(category: Chapter): Promise<Chapter>{
    return await  this.chapterRepository.save(category)
  }

  async remove(id: string): Promise<void> {
    await this.chapterRepository.delete(id);
  }
}
