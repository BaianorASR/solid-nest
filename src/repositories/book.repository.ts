import { IBook } from '@entities';

export interface IBookRepository {
  getById(id: number): Promise<IBook>;
}

export const IBookRepository = Symbol('IBookRepository');
