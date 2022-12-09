import { BookModule } from '@modules';
import { Module } from '@nestjs/common';

@Module({
  imports: [BookModule],
})
export class AppModule {}
