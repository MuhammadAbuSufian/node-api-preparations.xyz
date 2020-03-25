import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('/category')
export class CategoryController {
  constructor( private readonly usersService: UserService) {}

  @Post()
  getQuestion(category): any {
    return 'Sample question';
  }

}