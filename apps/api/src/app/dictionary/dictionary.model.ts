import * as mongoose from 'mongoose';

export const DictionarySchema = new mongoose.Schema({
    word: { type: String, required: true }
}); 

export interface DictionaryWord {
    word: string;
}