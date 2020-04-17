import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Subject } from '../models/entities/subject';
import { SubjectService } from '../services/subject.service';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';

@Controller('/subject')
export class SubjectController {
  constructor( private readonly service: SubjectService) {}

  @Post()
  async create(@Body() category: Subject) {
    return await this.service.save(category);
  }

  @Post('data-grid')
  async getGridData(@Body() request: DataTableRequestModel): Promise<DataAbleViewModel<Subject>>  {
    return await  this.service.findGridData(request);
  }

  @Get('data-setup')
  async getSubjectsSetup(): Promise<Subject[]> {
    return await this.service.getSetupData();
  }

  @Get(':category')
  async getSubjectsByCategory(@Param('category') category: string): Promise<any[]> {
    return await this.service.getSubjectByCategory(category);
  }
  //
  // @Get(':id')
  // async getOne(@Param('id') id: string): Promise<Subject> {
  //   return await this.service.findOne(id);
  // }

  @Put(':id')
  async update(@Param('id') id: string, @Body() category: Subject) {
    return await this.service.save(category);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(id);
  }

}
