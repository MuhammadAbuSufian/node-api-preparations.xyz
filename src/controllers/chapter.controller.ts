import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { ChapterService } from '../services/chapter.service';
import { Chapter } from '../models/entities/chapter';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';

@Controller('/chapter')
export class ChapterController {
  constructor( private readonly service: ChapterService) {}

  @Post()
  async create(@Body() category: Chapter) {
    return await this.service.save(category);
  }

  @Post('data-grid')
  async getGridData(@Body() request: DataTableRequestModel): Promise<DataAbleViewModel<Chapter>>  {
    return await  this.service.findGridData(request);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Chapter> {
    return await this.service.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() category: Chapter) {
    return await this.service.save(category);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(id);
  }

}