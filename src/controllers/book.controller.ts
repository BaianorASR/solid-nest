import { Controller, Get } from '@nestjs/common';

import { BookUseCase } from '../use-cases/book.usecase';

@Controller('book')
export class BookController {
  constructor(private readonly bookUseCase: BookUseCase) {}
  @Get()
  async getById() {
    return this.bookUseCase.getById(1);
  }
}
