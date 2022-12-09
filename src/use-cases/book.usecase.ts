import { Inject, Injectable } from '@nestjs/common';

import { IBookRepository } from '@repositories/book.repository';

@Injectable()
export class BookUseCase {
  constructor(
    @Inject(IBookRepository)
    private readonly bookRepository: IBookRepository,
  ) {}

  async getById(id: number) {
    const book = await this.bookRepository.getById(id);
    return book;
  }
}
