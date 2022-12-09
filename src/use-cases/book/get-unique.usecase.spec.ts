import { mock } from 'jest-mock-extended';

import { faker } from '@faker-js/faker';
import { Book } from '@prisma/client';
import { BookRepository } from '@repositories';

import { GetUniqueBookUseCase } from './get-unique.usecase';

describe('GetUniqueBookUseCase', () => {
  it('should return a book', async () => {
    const mockRepository = mock<BookRepository>();
    const mockBook = mock<Book>({
      authorId: faker.datatype.number(),
      categoryId: faker.datatype.number(),
      id: faker.datatype.number(),
      price: faker.datatype.number(),
      title: faker.random.word(),
      userId: faker.datatype.number(),
    });

    mockRepository.getById.mockResolvedValue(mockBook);
    const getUniqueBookUseCase = new GetUniqueBookUseCase(mockRepository);

    const book = await getUniqueBookUseCase.execute(1);
    expect(book).toBeDefined();
    expect(book).toEqual(mockBook);
  });
});
