export class BookEntity {
  author: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  cover: string;
  id: number;

  constructor(dto: Partial<BookEntity>) {
    Object.assign(this, dto);
  }
}

export interface IBook {
  author: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  cover: string;
  id: number;
}
