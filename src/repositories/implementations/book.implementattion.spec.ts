import { BookImplementation } from './book.implementation';

describe('BookImplementation', () => {
  it('should be defined', () => {
    const bookImplementation = new BookImplementation();
    expect(bookImplementation).toBeDefined();
    expect(bookImplementation).toBeInstanceOf(BookImplementation);
  });
});
