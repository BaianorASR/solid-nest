import { Controller, Get } from '@nestjs/common';
import { Book } from '@prisma/client';
import { GetUniqueBookUseCase } from '@use-cases';

@Controller('book')
export class BookController {
  constructor(private readonly getUniqueBookUseCase: GetUniqueBookUseCase) {}
  @Get()
  async getById(): Promise<Book> {
    return this.getUniqueBookUseCase.execute(1);
  }
}
