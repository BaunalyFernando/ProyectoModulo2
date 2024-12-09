const renderCards = require("./renderCards");
const axios = require("axios");


const fetchData = async() => {
    try {
        const data = await axios.get("http://localhost:3000/movies");
        console.log(data.data);
        renderCards(data.data);
    } catch (err) {
        console.log(err);
    }
}


fetchData();