// Grab DOM elements
const titleInput = document.getElementById('titleInput');
const typeInput = document.getElementById('typeInput');
const addBtn = document.getElementById('addBtn');
const watchlistUl = document.getElementById('watchlist');

// Load initial data from LocalStorage or start with an empty array
let watchlist = JSON.parse(localStorage.getItem('myWatchlist')) || [];

// Render the list on initial load
renderList(watchlist);

// Add item event listener
addBtn.addEventListener('click', () => {
    const title = titleInput.value.trim();
    const type = typeInput.value;

    if (title === '') {
        alert('Please enter a title!');
        return;
    }

    // Create a new item object
    const newItem = {
        id: Date.now(), // Unique ID
        title: title,
        type: type,
        watched: false
    };

    watchlist.push(newItem);
    saveAndRender();
    titleInput.value = ''; // Clear input
});

// Save to LocalStorage and refresh the UI
function saveAndRender() {
    localStorage.setItem('myWatchlist', JSON.stringify(watchlist));
    renderList(watchlist);
}

// Render list items to the DOM
function renderList(itemsToRender) {
    watchlistUl.innerHTML = ''; // Clear current list

    itemsToRender.forEach(item => {
        const li = document.createElement('li');
        if (item.watched) li.classList.add('completed');

        li.innerHTML = `
            <span><strong>[${item.type}]</strong> ${item.title}</span>
            <div class="actions">
                <button onclick="toggleWatched(${item.id})">${item.watched ? 'Unwatch' : 'Watched'}</button>
                <button class="delete-btn" onclick="deleteItem(${item.id})">X</button>
            </div>
        `;
        watchlistUl.appendChild(li);
    });
}

// Toggle watched status
function toggleWatched(id) {
    watchlist = watchlist.map(item => {
        if (item.id === id) {
            return { ...item, watched: !item.watched };
        }
        return item;
    });
    saveAndRender();
}

// Delete item
function deleteItem(id) {
    watchlist = watchlist.filter(item => item.id !== id);
    saveAndRender();
}

// Filter list by Type (All, Movie, TV Show)
function filterList(type) {
    if (type === 'all') {
        renderList(watchlist);
    } else {
        const filtered = watchlist.filter(item => item.type === type);
        renderList(filtered);
    }
}