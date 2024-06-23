const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktail = response.data.drinks[0];
        res.render('index', { cocktail });
    } catch (error) {
        console.error('Error fetching cocktail:', error);
        res.status(500).send('Error fetching cocktail');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
