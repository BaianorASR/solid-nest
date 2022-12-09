import { CreateBookDto } from 'src/dtos/create-book.dto';

import { Book } from '@prisma/client';

export abstract class BookRepository {
  abstract getById(id: number): Promise<Book>;
  abstract create(book: CreateBookDto): Promise<void>;
}
