const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

// dành cho api
const userApi = require('./src/router/api/userApi');

var app = express();

const port = process.env.PORT ?? 8888;
const hostname = process.env.HOSTNAME ?? "localhost";
const secret = process.env.SECRET ?? "secret";

app.use(
  session({
    secret: secret, // bí mật nnn
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(cors());
// view engine setup
app.set("views", path.join("./src", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("./src", "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var url =
  "mongodb+srv://thong:1@cluster0.hihepgd.mongodb.net/SemoDatabase?retryWrites=true&w=majority";
// kết nối database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Đã kết nối với database"))
  .catch((err) => console.log(">>>>>>>>> DB Error: ", err));


app.use('/api/users', userApi)

app.listen(port, hostname, async () => {
  console.log(`Server is running on port ${port} ${hostname}`);
});
