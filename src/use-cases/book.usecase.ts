import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { BookRepository } from '@repositories';

@Injectable()
export class BookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async getById(id: number): Promise<Book> {
    const book = await this.bookRepository.getById(id);
    return book;
  }
}
