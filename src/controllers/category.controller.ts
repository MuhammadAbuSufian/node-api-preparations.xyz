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
  create(@Body() category: Category) {
    return this.service.save(category);
  }

  @Post('data-grid')
  async getGridData(@Body() request: DataTableRequestModel) {

    return await  this.service.findGridData(request);
  }

  @Get()
  findAll(@Query() query: any) {
    return `This action returns all cats (limit:  items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() category: Category) {
    return this.service.save(category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

}