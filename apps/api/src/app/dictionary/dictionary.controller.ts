import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {

    constructor(private readonly dictionaryService: DictionaryService) {

    }

    @Get('word')
    getWord() {
        return { message: 'Welcome to word api!' };
    }

    @Get('search/:text')
    async searchText(
        @Param() params: any
    ) {
        const results = await this.dictionaryService.searchText(params.text);
        return { results };
    }

    @Post('add')
    async addProduct(
        @Body('word') word: string
    ) {
        const generateId = await this.dictionaryService.insertWord(word);
        return { id: generateId };
    }

}
