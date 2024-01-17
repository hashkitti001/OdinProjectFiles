let express = require('express');
let router = express.Router();
let category_controller = require("../controllers/categoryController")
let item_controller = require("../controllers/itemController");
let Item = require("../models/items");
let Categories = require("../models/categories")
const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

async function main() {
  let uri = process.env.MONGODB_URI;
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log("Connected to", uri);
}



main().catch(err => console.log(err))


async function getItems() {
  const Items = await Item.find({})
  return Items
}
async function getCategories() {
  const gottenCategory = await Categories.find({})
  return gottenCategory
}
// async function getItem(id){
//   const gottenItem = await Item.find({"_id": `ObjectId("${id}")`})
//   // console.log(gottenItem)
//   return gottenItem
// }
// async function getCategory(id){
//   const gottenCategory = await Categories.find({"_id": `ObjectId("${id}")`})
//   return gottenCategory
// }
main().catch(err => console.log(err))
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
//Item routes and methods
// router.get('/newitem', (req, res, next) => {
//   res.render('item_form');
// })
router.get('/items', (req, res) => {
  getItems().then((FoundItems) => {
    res.render("items", { docs: FoundItems })
  })
})
router.get('/items/create', item_controller.item_create_get)
// router.get('/items/:id', async (req, res) => {
//   let reqId = req.params.id;
//   await getItem(reqId).then((FoundItem) => {
//     res.render("item", {data: FoundItem})
//   })
// })
router.post('/items/create', item_controller.item_create_post)
//Category routes and methods
router.get('/categories', (req, res) => {
  getCategories().then((FoundItems) => {
    res.render("categories", { docs: FoundItems })
  })
})
//  router.get('/categories/:id', async (req, res) => {
//   let reqId = req.params.id;

//   await getCategory(reqId).then((stuff) => {
//     // console.log(FoundItem)
//     res.render("item", {data: stuff})
//   });
// })
router.get('/categories/create', category_controller.category_create_get);
router.post('/categories/create', category_controller.category_create_post);
// console.log(category_controller)
module.exports = router;
