import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DictionaryModule } from './dictionary/dictionary.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://m001-student:m001-mongodb-basics@google-search.wpqos.mongodb.net/dictionary?retryWrites=true&w=majority"), 
    DictionaryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
