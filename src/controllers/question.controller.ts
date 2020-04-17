import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuestionRequestModel } from '../models/request-models/question.request.model';
import { Question } from '../models/entities/question';

@Controller('/question')
export class QuestionController {
  constructor( private readonly service: QuestionService) {}

  @Get(':page/:category/:chapter/:subject')
  async getQuestion(@Param('page') page: number, @Param('category') category: string, @Param('chapter') chapter: string, @Param('subject') subject: string): Promise<Question[]> {
    return await  this.service.getQuestion(page, category, chapter, subject);
  }


  @Post()
  async create(@Body() question: QuestionRequestModel): Promise<Question> {
    return await this.service.save(question);
  }

}
