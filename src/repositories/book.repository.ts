import { IBook } from '../entities/book.entity';

export interface IBookRepository {
  getById(id: number): Promise<IBook>;
}

export const IBookRepository = Symbol('IBookRepository');
