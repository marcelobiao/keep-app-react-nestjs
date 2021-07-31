import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from '../ormconfig'
import { NoteModule } from './modules/notes/note.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    NoteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
