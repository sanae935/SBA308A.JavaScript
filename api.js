const API_URL = 'https://openlibrary.org/search.json';

export async function fetchBooks(query) {
    const response = await fetch(`${API_URL}?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.docs;
}