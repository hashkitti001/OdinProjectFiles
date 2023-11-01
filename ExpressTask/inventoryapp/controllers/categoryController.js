const {body, validationResult} = require("express-validator")
const Category  = require("../models/categories")
const asyncHandler = require("express-async-handler")

exports.category_create_get = (req, res, next) => {
    res.render("category_form")
}
// Handle Genre create on POST.
exports.category_create_post = [
    // Validate and sanitize the name field.
    body("name", "Category name must contain at least 3 characters")
      .trim()
      .isLength({ min: 3 })
      .escape(),
    body("desc", "Category description must be valid")
      .trim()
      .escape(),
    // Process request after validation and sanitization.
    asyncHandler(async (req, res, next) => {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      console.log(errors)
      // Create a genre object with escaped and trimmed data.
      const category = new Category({ name: req.body.name, description: req.body.desc });
  
      if (!errors.isEmpty()) {
        // There are errors. Render the form again with sanitized values/error messages.
        res.render("category_form", {
          title: "Create Category",
          category: category,
          errors: errors.array(),
        });
        return;
      } else {
        // Data from form is valid.
        // Check if Genre with same name already exists.
        const categoryExists = await Category.findOne({ name: req.body.name }).exec();
        if (categoryExists) {
          // Genre exists, redirect to its detail page.
          res.redirect(categoryExists.url);
        } else {
          await category.save();
          // New genre saved. Redirect to genre detail page.
          res.redirect(category.url);
        }
      }
    }),
  ];
  