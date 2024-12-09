const cleanningForm = () => {
    const title = document.getElementById("titleInput");
    const year = document.getElementById("yearInput");
    const director = document.getElementById("directorInput");
    const duration = document.getElementById("durationInput");
    const rate = document.getElementById("rateInput");
    const cover = document.getElementById("coverInput");
    const actionGenre = document.getElementById("actionCheckbox");
    const adventureGenre = document.getElementById("adventureCheckbox");
    const comedyGenre = document.getElementById("comedyCheckbox");
    const dramaGenre = document.getElementById("dramaCheckbox");
    const fantasyGenre = document.getElementById("fantasyCheckbox");
    const horrorGenre = document.getElementById("horrorCheckbox");
    const mysteryGenre = document.getElementById("mysteryCheckbox");
    const thrillerGenre = document.getElementById("thrillerCheckbox");
    const scifiGenre = document.getElementById("scifiCheckbox");


    title.value = '';
    year.value = '';
    director.value = '';
    duration.value = '';
    rate.value = '';
    cover.value = '';
    actionGenre.checked = false;
    adventureGenre.checked = false;
    comedyGenre.checked = false;
    dramaGenre.checked = false;
    fantasyGenre.checked = false;
    horrorGenre.checked = false;
    mysteryGenre.checked = false;
    thrillerGenre.checked = false;
    scifiGenre.checked = false;
}

const createMovie = () => {
    const title = document.getElementById("titleInput").value;
    const year = document.getElementById("yearInput").value;
    const director = document.getElementById("directorInput").value;
    const duration = document.getElementById("durationInput").value;
    const rate = document.getElementById("rateInput").value;
    const cover = document.getElementById("coverInput").value;

    const genres = [];
    document.querySelectorAll('#genreCheckboxes input[type="checkbox"]:checked').forEach((checkbox) => {
        genres.push(checkbox.value);
    });

    if (!title || !year || !director || !duration || !rate || !cover || genres.length === 0) {
        alert("Hay campos que no se completaron");
        return;
    }

    axios.post("http://localhost:3000/movies", {
            title,
            year,
            director,
            duration,
            genre: genres,
            rate,
            poster: cover
        })
        .then(response => {
            alert("Película creada correctamente");
            cleanningForm();
        })
        .catch(error => {
            alert("Ocurrió un error al crear la película, revise los campos");
        });
};


const yearInput = document.getElementById("yearInput");
const durationInput = document.getElementById("durationInput");
const rateInput = document.getElementById("rateInput");

const yearError = document.getElementById("yearError");
const durationError = document.getElementById("durationError");
const rateError = document.getElementById("rateError");


function showError(input, message, errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
    input.classList.add("is-invalid");
}

function hideError(input, errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
    input.classList.remove("is-invalid");
}

yearInput.addEventListener("input", () => {
    if (yearInput.value.length > 4) {
        showError(yearInput, "El año debe tener un máximo de 4 caracteres.", yearError);
    } else {
        hideError(yearInput, yearError);
    }
});


const durationPattern = /^[a-zA-Z0-9\s]+$/;
durationInput.addEventListener("input", () => {
    if (!durationPattern.test(durationInput.value)) {
        showError(durationInput, "La duración solo puede contener letras y números.", durationError);
    } else {
        hideError(durationInput, durationError);
    }
});


rateInput.addEventListener("input", () => {
    const rate = parseInt(rateInput.value);
    if (isNaN(rate) || rate < 1 || rate > 10) {
        showError(rateInput, "La puntuación debe ser un número entre 1 y 10.", rateError);
    } else {
        hideError(rateInput, rateError);
    }
});


document.getElementById("submit").addEventListener("click", function(event) {

    event.preventDefault();

    let formIsValid = true;


    if (yearInput.value.length > 4) {
        showError(yearInput, "El año debe tener un máximo de 4 caracteres.", yearError);
        formIsValid = false;
    }

    if (!durationPattern.test(durationInput.value)) {
        showError(durationInput, "La duración solo puede contener letras y números.", durationError);
        formIsValid = false;
    }

    const rate = parseInt(rateInput.value);
    if (isNaN(rate) || rate < 1 || rate > 10) {
        showError(rateInput, "La puntuación debe ser un número entre 1 y 10.", rateError);
        formIsValid = false;
    }

    if (formIsValid) {
        alert("Formulario enviado con éxito!");
    }
});


const createButton = document.getElementById("submit");
createButton.addEventListener("click", createMovie);

const cleanningButton = document.getElementById("cleanningButton");
cleanningButton.addEventListener("click", cleanningForm);