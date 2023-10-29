let express = require('express');
let router = express.Router();
let category_controller = require("../controllers/categoryController")
let item_controller = require("../controllers/itemController");
let Item = require("../models/items");
let Categories = require("../models/categories")
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/InventoryDb"

async function main (){
    await mongoose.connect(url).then(console.log("Connected to", url));
}
async function getItems(){
  const Items = await Item.find({})
  return Items
}
async function getCategory(){
  const gottenCategory = await Categories.find({})
  return gottenCategory
}
main().catch(err => console.log(err))
const items = require('../models/items');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//Item routes and methods
// router.get('/newitem', (req, res, next) => {
//   res.render('item_form');
// })
router.get('/items', (req, res) => {
 getItems().then((FoundItems) => {
    res.render("items", {docs: FoundItems})
 })
})
router.get('/items/create', item_controller.item_create_get)
router.post('/items/create', item_controller.item_create_post)
//Category routes and methods
router.get('/categories', (req, res) => {
  getCategory().then((FoundItems) => {
     res.render("categories", {docs: FoundItems})
  })
 })
router.get('/categories/create', category_controller.category_create_get);
router.post('/categories/create', category_controller.category_create_post);
// console.log(category_controller)
module.exports = router;
