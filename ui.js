export function displayBooks(books) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            <p>${book.first_publish_year ? book.first_publish_year : 'No Date'}</p>
            <button class="add-favorite">Add to Favorites</button>
        `;
        card.querySelector('.add-favorite').addEventListener('click', () => {
            addFavorite(book);
            alert(`${book.title} added to favorites!`);
        });
        gallery.appendChild(card);
    });

}

function addFavorite(book) {
    const favorites = JSON.parse(localStorage.getItem('bookFavorites')) || [];

    
    if (!favorites.some(fav => fav.key === book.key)) {
        favorites.push(book);
        localStorage.setItem('bookFavorites', JSON.stringify(favorites));
    }
}
function removeFavorite(bookKey) {
    const favorites = JSON.parse(localStorage.getItem('bookFavorites')) || [];
    
    
    const updatedFavorites = favorites.filter(fav => fav.key !== bookKey);
    localStorage.setItem('bookFavorites', JSON.stringify(updatedFavorites));
    
    displayFavorites();
}

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('bookFavorites')) || [];
    const favoritesContainer = document.getElementById('favorites-container');
    favoritesContainer.innerHTML = ''; 

    favorites.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'favorite-book-card';

        const title = document.createElement('h4');
        title.innerText = book.title || "Unknown Title";
        
        const authors = document.createElement('p');
        authors.innerText = book.author_name ? book.author_name.join(', ') : "Unknown Author";
        
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove from Favorites';
        removeButton.addEventListener('click', () => {
            removeFavorite(book.key);
            alert(`${book.title} removed from favorites!`);
        });
  
        bookCard.appendChild(title);
        bookCard.appendChild(authors);
        bookCard.appendChild(removeButton);

        
        favoritesContainer.appendChild(bookCard);
    });
}

displayFavorites();