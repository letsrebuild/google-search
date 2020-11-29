import { DictionaryService } from './dictionary.service';
import { DictionaryController } from './dictionary.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DictionarySchema } from './dictionary.model';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Dictionary', schema: DictionarySchema}])],
    controllers: [DictionaryController],
    providers: [DictionaryService]
})
export class DictionaryModule {}
