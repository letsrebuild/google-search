import { Controller, Post, Body, Get } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {

    constructor(private readonly dictionaryService: DictionaryService) {

    }

    @Get('word')
    getWord() {
        return { message: 'Welcome to word api!' };
    }

    @Post('add')
    async addProduct(
        @Body('word') word: string
    ) {
        const generateId = await this.dictionaryService.insertWord(word);
        return { id: generateId };
    }

}
