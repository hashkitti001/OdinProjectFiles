const { body, validationResult } = require("express-validator");
const Item = require("../models/items");
const asyncHandler = require("express-async-handler")
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/InventoryDb"

async function main (){
    await mongoose.connect(url).then(console.log("Connected to", url));
}
main().catch(err => console.log(err))
exports.item_create_get = asyncHandler(async (req, res, next) => {
   res.render("item_form")
})
exports.item_create_post = [
   // Sanitize and validate Name
   body("name", "Kitty must have a name of about 6 chars meow")
      .trim()
      .isLength({ min: 6 })
      .escape(),
   //Sanitize and validate  Description
   body("desc", "Describe kitty, meow")
      .trim()
      .escape(),
   //Sanitize and validate Category
   body("categ", "What category is kitty-chan?")
      .trim()
      .escape(),
   //Sanitize and validate Price
   body("price", "How much is kitty-chan")
      .trim()
      .isFloat()
      .escape(),
   //Sanitize and validate Number in Stock
   body("nis", "How many are available")
      .trim()
      .isInt()
      .escape(),

   asyncHandler(async (req, res, next) => {
      const errors = validationResult(req);
      console.log(errors);
      const item = new Item({ name: req.body.name, description: req.body.desc, category: req.body.categ, price: req.body.price, numberInStock: req.body.nis })
      if (!errors.isEmpty()) {
         res.render("item_form", {
            title: "Create Item",
            item: item,
            errors: errors.array()
         })
         return;
      } else {
         const itemExists = await Item.findOne({ name: req.body.name }).exec();
         if (itemExists) {
            // Genre exists, redirect to its detail page.
            res.redirect(itemExists.url);
         } else {
            await item.save();
            res.redirect(item.url);
         }
      }
   })
]