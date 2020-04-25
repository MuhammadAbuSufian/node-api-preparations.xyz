import * as mongoose from "mongoose";

export interface Category{
    title: string;
    description: string;
}

export const categorySchema = new mongoose.Schema({
    title: String,
    description: String
});

