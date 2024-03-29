// models/Product.js

import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    name: { type: String },
    author: { type: String, },
    description: { type: String },
    image: { type: String, },
});


const Book = mongoose.models.Book || mongoose.model('Book', bookSchema);

export default Book;