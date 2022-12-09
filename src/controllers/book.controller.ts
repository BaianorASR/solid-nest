import { Controller, Get } from '@nestjs/common';
import { Book } from '@prisma/client';
import { BookUseCase } from '@use-cases';

@Controller('book')
export class BookController {
  constructor(private readonly bookUseCase: BookUseCase) {}
  @Get()
  async getById(): Promise<Book> {
    return this.bookUseCase.getById(1);
  }
}
