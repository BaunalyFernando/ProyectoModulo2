const moviesContainer = document.getElementById("moviesContainer");

const renderCards = (data) => {

    data.forEach((movie) => {

        const movieCardContainer = document.createElement("div");
        movieCardContainer.classList.add("card");

        const posterElement = document.createElement("img");
        posterElement.src = movie.poster;

        const titleElement = document.createElement("h3");
        titleElement.innerHTML = movie.title;

        const yearElement = document.createElement("p");
        yearElement.innerHTML = `Año: ${movie.year}`;

        const directorElement = document.createElement("p");
        directorElement.innerHTML = `Director: ${movie.director}`;

        const durationElement = document.createElement("p");
        durationElement.innerHTML = `Duración: ${ movie.duration }`;

        const detailsContainer = document.createElement("div");
        detailsContainer.classList.add("details");

        const genreElement = document.createElement("p");
        genreElement.innerHTML = `Géneros: ${movie.genre}`;

        const rateElement = document.createElement("p");
        rateElement.innerHTML = `Calificación: ${movie.rate}`;

        detailsContainer.appendChild(yearElement);
        detailsContainer.appendChild(directorElement);
        detailsContainer.appendChild(durationElement);
        detailsContainer.appendChild(genreElement);
        detailsContainer.appendChild(rateElement);

        movieCardContainer.appendChild(posterElement);
        movieCardContainer.appendChild(titleElement);
        movieCardContainer.appendChild(detailsContainer);

        moviesContainer.appendChild(movieCardContainer);
    });
};

module.exports = renderCards;