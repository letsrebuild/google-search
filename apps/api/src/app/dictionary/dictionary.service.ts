import { DictionaryWord } from './dictionary.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DictionaryService {

    constructor(@InjectModel('Dictionary') private readonly dictionaryModel: Model<DictionaryWord>) {}

    async insertWord(word: string) {
        const newWord = new this.dictionaryModel({word});
        const result = await newWord.save();
        console.log(result);
        return result.id as string;
    }

}
