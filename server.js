const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3002;
// app.use("/images", express.static(path.join(__dirname, "/public/images")));

const sess = {
  secret: "Super secret secret",

  //   cookie: {
  //     maxAge: 360000,
  //     httpOnly: false,
  //     secure: false,
  //     sameSite: "strict",
  //   },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
