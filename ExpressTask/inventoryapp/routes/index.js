let express = require('express');
let router = express.Router();
let category_controller = require("../controllers/categoryController")
let item_controller = require("../controllers/itemController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//Item routes and methods
router.get('/newitem', (req, res, next) => {
  res.render('item_form');
})
router.get('/items', item_controller.category_create_get);
router.get('/items/create', item_controller.category_create_get);
router.post('/items/create', item_controller.category_create_post);
//Category routes and methods
router.get('/categories', category_controller.category_create_get)
router.get('/categories/create', category_controller.category_create_get);
router.post('/categories/create', category_controller.category_create_post);
// console.log(category_controller)
module.exports = router;