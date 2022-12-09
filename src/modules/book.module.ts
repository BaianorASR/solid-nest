import { PrismaService } from '@common/db/prisma/prisma.service';
import { BookController } from '@controllers';
import { Module } from '@nestjs/common';
import { BookRepository } from '@repositories';
import { PrismaBookRepository } from '@repositories/prisma';
import { CreateBookUseCase, GetUniqueBookUseCase } from '@use-cases';

@Module({
  controllers: [BookController],
  providers: [
    PrismaService,
    GetUniqueBookUseCase,
    CreateBookUseCase,
    {
      provide: BookRepository,
      useClass: PrismaBookRepository,
    },
  ],
})
export class BookModule {}
