export class BookEntity {
  author: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  cover: string;
  id: number;
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
