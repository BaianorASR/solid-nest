import { BookEntity, IBook } from '@entities/book.entity';
import { Injectable } from '@nestjs/common';

import { IBookRepository } from '../book.repository';

@Injectable()
export class BookImplementation implements IBookRepository {
  async getById(id: number): Promise<IBook> {
    return new BookEntity({
      id,
      author: 'John Doe',
      title: 'The Book',
      description: 'The Book Description',
      price: 10,
      rating: 5,
    });
  }
}
