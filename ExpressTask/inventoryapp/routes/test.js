const mongoose = require("mongoose");
const Category = require("../models/categories");
const url = "mongodb://localhost:27017/InventoryDB";

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("Connected");
  } catch (err) {
    console.error(err);
  }
}

const id = "653e4d97f9b85a010a10a1bc"; // Make sure to define id as a variable
console.log(`ObjectId("${id}")`)
async function depression() {
  try {
    const data = await Category.findById("653e4d97f9b85a010a10a1bc")
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// Use async/await for connecting and fetching data
(async () => {
  await connect();
  await depression();
})();

console.log(Category); // This will log the Category object itself
