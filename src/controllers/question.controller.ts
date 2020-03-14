import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/entities/user.model';

@Controller('/question')
export class QuestionController {
  constructor( private readonly usersService: UserService) {}

  @Get()
  getQuestion(): any {
    return 'Sample question';
  }
}