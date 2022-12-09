import { PrismaService } from '@common/db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';

import { BookRepository } from '../book.repository';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async getById(id: number): Promise<Book> {
    const book = await this.prisma.book.findUnique({ where: { id } });
    return book;
  }
}
