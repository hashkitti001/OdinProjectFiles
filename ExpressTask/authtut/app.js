//Imports of external modules
const express = require("express");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Connection to MongoDB 
const url = "mongodb://localhost:27017/InventoryDb";
mongoose.connect(url);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
//Schema definition for User
const User = mongoose.model("users", new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
}));
//Express initialization and view engine setting
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

// Define the isAuthenticated middleware
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// Routes
app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

app.get("/signup", (req, res) => {
  res.render("signup_form");
});

app.post("/signup", async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
    });
    const result = await user.save();
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
});

app.get("/login", (req, res) => {
  res.render("login_form");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/protected-route", isAuthenticated, (req, res) => {
  res.render("protected_page");
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    console.log("Logging out....")
  });
  res.redirect("/");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("An error occurred");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
