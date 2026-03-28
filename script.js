// Deze functie pakt de lijst uit movies.js en zet ze op het scherm
function laadMijnFilms() {
    const container = document.getElementById('movie-container'); // Check of je HTML een div heeft met id="movie-container"
    
    if (!container) {
        console.error("Kan de plek op de pagina niet vinden om films te tonen!");
        return;
    }

    container.innerHTML = ''; // Maak de pagina leeg

    // Gebruik de lijst uit movies.js
    initialMovies.forEach(film => {
        const div = document.createElement('div');
        div.className = 'movie-card';
        div.innerHTML = `
            <h3>${film.title}</h3>
            <p>Rating: ${film.rating}</p>
        `;
        container.appendChild(div);
    });
}

// Starten zodra de pagina klaar is
window.onload = laadMijnFilms;
