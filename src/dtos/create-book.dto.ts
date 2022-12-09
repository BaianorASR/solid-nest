import { IsInt, IsString, Length } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @Length(1, 100)
  title: string;

  @IsInt()
  price: number;
}
