import { Book } from '@prisma/client';

export abstract class BookRepository {
  abstract getById(id: number): Promise<Book>;
}
