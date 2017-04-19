
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {ShoppingList} = require('./models');
const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at
ShoppingList.create('beans', 2);
ShoppingList.create('tomatoes', 3);
ShoppingList.create('peppers', 4);
Recipes.create('chocolate milk', ['cocoa', 'milk', 'sugar']);

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/shopping-list', (req, res) => {
  res.json(ShoppingList.get());
});

app.post('/shopping-list/items', (req, res) => {
  res.json(ShoppingList.create('eggs', 2));
});

//GET All Recipes
// app.get('/recipes', (req, res) => {
//   res.json({message:'getallrecipes'});
// });
//GET SPECIFIC RECIPES
// app.get('/recipes/:id', (req, res) => {
//   res.json({message:`getaspecificrecipes ${req.params.id}`});
// });
//CREATE RECIPES
// app.post('/recipes', (req, res) => {
//   res.json({message:'createrecipes'});
// });
//DELETE RECIPES
// app.delete('/recipes/:id', (req, res) => {
//   res.json({message:'deleterecipes'});
// });


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
