import { BookModule } from '@modules/book.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [BookModule],
})
export class AppModule {}
