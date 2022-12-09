import { PrismaService } from '@common/db/prisma/prisma.service';
import { Test, TestingModule } from '@nestjs/testing';
import { Book } from '@prisma/client';

import { PrismaBookRepository } from './prisma-book.repository';

describe('BookImplementation', () => {
  let prismaBookRepository: PrismaBookRepository;
  let prismaService: PrismaService;

  const MockBook: Book = {
    id: 1,
    title: 'The Hobbit',
    userId: 1,
    authorId: 1,
    categoryId: 1,
    price: 10,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaBookRepository,
        {
          provide: PrismaService,
          useValue: {
            book: {
              findMany: jest.fn(),
              findUnique: jest.fn(),
              create: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    prismaBookRepository =
      module.get<PrismaBookRepository>(PrismaBookRepository);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(prismaBookRepository).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  describe('getById', () => {
    it('should return a book', async () => {
      jest.spyOn(prismaService.book, 'findUnique').mockResolvedValue(MockBook);

      const result = await prismaBookRepository.getById(1);

      expect(result).toEqual(MockBook);
    });
  });
});
