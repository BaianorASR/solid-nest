import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { BookRepository } from '@repositories';

@Injectable()
export class GetUniqueBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(id: number): Promise<Book> {
    const book = await this.bookRepository.getById(id);
    return book;
  }
}
