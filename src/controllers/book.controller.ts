import { Body, Controller, Get, Post } from '@nestjs/common';
import { Book } from '@prisma/client';
import { CreateBookUseCase, GetUniqueBookUseCase } from '@use-cases';
import { CreateBookDto } from '@app/dtos/create-book.dto';

@Controller('book')
export class BookController {
  constructor(
    private readonly getUniqueBookUseCase: GetUniqueBookUseCase,
    private readonly createBookUseCase: CreateBookUseCase,
  ) {}

  @Get()
  async getById(): Promise<Book> {
    return this.getUniqueBookUseCase.execute(1);
  }

  @Post()
  async create(@Body() book: CreateBookDto): Promise<void> {
    return this.createBookUseCase.execute(book);
  }
}
