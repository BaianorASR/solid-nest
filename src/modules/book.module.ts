import { BookController } from '@controllers';
import { BookImplementation } from '@implementations';
import { Module } from '@nestjs/common';
import { IBookRepository } from '@repositories';
import { BookUseCase } from '@use-cases';

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
