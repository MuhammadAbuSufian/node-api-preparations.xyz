import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from '../models/entities/subject';
import { Repository } from 'typeorm';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { Category } from '../models/entities/category';
import { BaseSetupViewModel } from '../models/view-models/base-setup.view.model';
import { Question } from '../models/entities/question';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async findGridData(request: DataTableRequestModel) : Promise<DataAbleViewModel<Subject>>{
    const gridData: DataAbleViewModel<Subject> = new DataAbleViewModel<Subject>();
    const searchKeyPattern = new RegExp('.*' + request.search.value + '.*', "i");
    const query: FindManyOptions<Subject> = {
      where: {title: searchKeyPattern},
      skip: request.start,
      take: request.length,
      order: {
        [request.columns[request.order[0].column].data] : request.order[0].dir.toUpperCase()
      },
    };
    const data = await this.subjectRepository.findAndCount( query );
    gridData.recordsTotal = await this.subjectRepository.count();
    gridData.data = data[0];
    gridData.recordsFiltered = data[1];
    return gridData;
  }

  async findOne(id: string): Promise<Subject> {
    return await this.subjectRepository.findOne(id);
  }

  async save(category: Subject): Promise<Subject>{
    return await  this.subjectRepository.save(category)
  }

  async remove(id: string): Promise<void> {
    await this.subjectRepository.delete(id);
  }

  async getSetupData(): Promise<Subject[]> {
    return await this.subjectRepository.find({
      select: ['id', 'title']
    });
  }

  //Todo
  async getSubjectByCategory(category: string): Promise<any[]> {
    return await this.questionRepository.find(
      {
        where : {"Categories.title": category},
        select: ["subject"]
      }
    );
  }
}
