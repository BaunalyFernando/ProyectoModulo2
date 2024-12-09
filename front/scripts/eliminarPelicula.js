const moviesContainer = document.getElementById("moviesContainer");

const renderCards = (data) => {

    moviesContainer.innerHTML = "";

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

        const genreElement = document.createElement("p");
        genreElement.innerHTML = `Géneros: ${movie.genre}`;

        const rateElement = document.createElement("p");
        rateElement.innerHTML = `Calificación: ${movie.rate}`;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = 'Eliminar';
        movieCardContainer.classList.add("btnn");

        detailsContainer.appendChild(yearElement);
        detailsContainer.appendChild(directorElement);
        detailsContainer.appendChild(durationElement);
        detailsContainer.appendChild(genreElement);
        detailsContainer.appendChild(rateElement);

        movieCardContainer.appendChild(posterElement);
        movieCardContainer.appendChild(titleElement);
        movieCardContainer.appendChild(detailsContainer);
        movieCardContainer.appendChild(deleteButton);

        moviesContainer.appendChild(movieCardContainer);

        deleteButton.addEventListener("click", async() => {
            try {
                await axios.delete(`http://localhost:3000/movies/${movie._id}`);
                alert("Película eliminada correctamente");
                fetchData();
            } catch (error) {
                console.error("Error al eliminar la película:", error);
                alert("Ocurrió un error al eliminar la película");
            }
        });

    });
};


const deleteMovie = async() => {
    const movie = document.getElementsByName("btnn");
    movie.addEventListener("click", () => {
            axios.delete(`http://localhost:3000/movies/${movie._id}`);
        })
        .then(response => {
            alert("Película eliminada correctamente");
            cleanningForm();
        })
        .catch(error => {
            alert("Ocurrió un error al eliminar la película");
        });
}

const fetchData = async() => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        renderCards(response.data);
    } catch (err) {
        console.error("Error al obtener datos:", err);
    }
};

fetchData();