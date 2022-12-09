import { CreateBookDto } from '@app/dtos/create-book.dto';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { BookRepository } from '@repositories';

@Injectable()
export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  async execute(book: CreateBookDto): Promise<void> {
    try {
      await this.bookRepository.create(book);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
