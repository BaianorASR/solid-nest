import { BookController } from '@controllers/book.controller';
import { BookImplementation } from '@implementations/book.implementation';
import { Module } from '@nestjs/common';
import { IBookRepository } from '@repositories/book.repository';
import { BookUseCase } from '@use-cases/book.usecase';

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
