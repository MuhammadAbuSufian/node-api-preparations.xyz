import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/entities/category';
import { DataTableRequestModel } from '../models/request-models/data-table.request.model';
import { DataAbleViewModel } from '../models/view-models/data-able.view.model';

@Controller('/category')
export class CategoryController {
  constructor( private readonly service: CategoryService) {}

  @Post()
  async create(@Body() category: Category) {
    return await this.service.save(category);
  }

  @Post('data-grid')
  async getGridData(@Body() request: DataTableRequestModel): Promise<DataAbleViewModel<Category>>  {
    return await  this.service.findGridData(request);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Category> {
    return await this.service.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() category: Category) {
    return await this.service.save(category);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.service.remove(id);
  }

}