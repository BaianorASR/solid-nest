import { Module } from '@nestjs/common';
import { BookModule } from './modules/book.module';

@Module({
  imports: [BookModule],
})
export class AppModule {}
