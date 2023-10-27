var express = require('express');
var router = express.Router();
var category_controller = require("../controllers/categoryController")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/newitem', (req, res, next) => {
  res.render('item_form');
})
router.get('/categories', category_controller.category_create_get)
router.get('/categories/create', category_controller.category_create_get);
router.post('/categories/create', category_controller.category_create_post);
// console.log(category_controller)
module.exports = router;
