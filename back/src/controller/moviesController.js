const movieService = require("../services/movieService");

module.exports = {
    getAllMovies: async(req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(400).send({
                error: "No se estan obteniendo las peliculas"
            })
        }
    },

    createMovie: async(req, res) => {
        try {

            const movie = req.body;
            await movieService.createMovies(movie);
            res.status(200).json({ message: "Pelicula creada correctamente" })
        } catch (error) {
            res.json({ error: error })
        }
    },

    deleteMovie: async(req, res) => {
        try {
            const { id } = req.params;
            const result = await movieService.deleteMovie(id);

            res.status(200).json({ message: "Pelicula eliminada correctamente" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};