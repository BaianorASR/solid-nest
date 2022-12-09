import { Injectable } from '@nestjs/common';

import { BookEntity, IBook } from '../../entities/book.entity';
import { IBookRepository } from '../book.repository';

@Injectable()
export class BookImplementation implements IBookRepository {
  async getById(id: number): Promise<IBook> {
    return new BookEntity();
  }
}
