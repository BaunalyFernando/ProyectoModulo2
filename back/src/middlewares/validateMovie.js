const validateMovie = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;


    if (!title || !year || !director || !duration || !rate || !poster || !genre) {
        return res.status(400).json({ error: "Faltan propiedades obligatorias" });
    }


    if (!/^\d{4}$/.test(year)) {
        return res.status(400).json({ error: "El año debe tener 4 dígitos" });
    }


    if (typeof duration !== 'string' || duration.length > 8) {
        return res.status(400).json({ error: "La duración debe tener un máximo de 8 caracteres" });
    }


    if (!Array.isArray(genre) || genre.length === 0) {
        return res.status(400).json({ error: "Debe seleccionar al menos un género" });
    }


    if (isNaN(rate) || rate < 1 || rate > 10) {
        return res.status(400).json({ error: "La puntuación debe ser un número entre 1 y 10" });
    }


    next();
};

module.exports = { validateMovie };