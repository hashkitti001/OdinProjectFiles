let categorySchema = require("./models/categories");
const mongoose = require("mongoose");
let url = "mongodb://localhost:27017/InventoryDb"

async function main (){
    await mongoose.connect(url).then(console.log("Connected to", url));
}
main().catch(err => console.log(err))
const newCateg = new categorySchema({
    name: "Doja Cat", 
    description: "The weirdest cat of all"
})
newCateg.save().then((doc) => {
    console.log(doc._id.toString())
})