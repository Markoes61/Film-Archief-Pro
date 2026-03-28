// Functie om de films op het scherm te tonen
function toonFilms() {
    const lijstElement = document.getElementById('film-lijst'); // Zorg dat je in HTML een div hebt met id="film-lijst"
    lijstElement.innerHTML = ''; // Maak de lijst eerst leeg

    initialMovies.forEach(film => {
        const filmItem = document.createElement('div');
        filmItem.className = 'film-kaart';
        filmItem.innerHTML = `
            <h3>${film.title}</h3>
            <p>Rating: ${film.rating}</p>
        `;
        lijstElement.appendChild(filmItem);
    });
}

// Start de functie als de pagina geladen is
window.onload = toonFilms;
