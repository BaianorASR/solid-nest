import { Module } from '@nestjs/common';

import { BookController } from '../controllers/book.controller';
import { IBookRepository } from '../repositories/book.repository';
import { BookImplementation } from '../repositories/implementations/book.implementation';
import { BookUseCase } from '../use-cases/book.usecase';

@Module({
  controllers: [BookController],
  providers: [
    BookUseCase,
    {
      provide: IBookRepository,
      useClass: BookImplementation,
    },
  ],
})
export class BookModule {}
