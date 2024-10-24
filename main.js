import { fetchBooks } from './api.js';
import { displayBooks } from './ui.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
    const query = document.getElementById('search').value;
    const books = await fetchBooks(query);
    console.log(books)
    displayBooks(books);
});

document.addEventListener('DOMContentLoaded', () => {
    
});