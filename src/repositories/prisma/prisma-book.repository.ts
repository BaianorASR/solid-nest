import { CreateBookDto } from 'src/dtos/create-book.dto';

import { PrismaService } from '@common/db/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';

import { BookRepository } from '../book.repository';

@Injectable()
export class PrismaBookRepository implements BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(book: CreateBookDto): Promise<void> {
    await this.prisma.book.create({ data: book });
  }

  async getById(id: number): Promise<Book> {
    const book = await this.prisma.book.findUnique({ where: { id } });
    return book;
  }
}
