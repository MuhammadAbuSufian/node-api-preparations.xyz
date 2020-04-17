import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuestionRequestModel } from '../models/request-models/question.request.model';
import { Question } from '../models/entities/question';

@Controller('/question')
export class QuestionController {
  constructor( private readonly service: QuestionService) {}

  @Get(':page')
  async getQuestion(@Param('page') page: number): Promise<Question[]> {
    return await  this.service.getQuestion(page);
  }


  @Post()
  async create(@Body() question: QuestionRequestModel): Promise<Question> {
    return await this.service.save(question);
  }

}