const MongoClient = require("mongodb").MongoClient;
const createError = require("http-errors");
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
const userApi = require("./src/routes/api/userApi");
const diaryApi = require("./src/routes/api/diaryApi");
const momentApi = require("./src/routes/api/momentApi");
const friendApi = require("./src/routes/api/friendApi");
const chatMessageApi = require("./src/routes/api/chatMessageApi");
const toDoApi = require("./src/routes/api/toDoApi");
// dành cho cpnel
const {
  signInRouter,
  usersRouter,
  reportRouter,
} = require("./src/routes/web/indexRouter");

var app = express();

// view engine setup
app.set("views", path.join("./src", "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join("./src", "public")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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

var url =
  "mongodb+srv://thong:1@cluster0.hihepgd.mongodb.net/SemoApp?retryWrites=true&w=majority";
// kết nối database
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Đã kết nối với database"))
  .catch((err) => console.log(">>>>>>>>> DB Error: ", err.message));

const chat = async () => {
  const client = new MongoClient(url);

  await client.connect();

  const collection = client.db("SemoApp").collection("chatmessages");

  const changeStream = collection.watch();

  changeStream.on("change", (change) => {
    console.log("Thay đổi:", change.documentKey);
  });
};

// dành cho api
app.use("/api/users", userApi);
app.use("/api/diary", diaryApi);
app.use("/api/moment", momentApi);
app.use("/api/friend", friendApi);
app.use("/api/chatMessage", chatMessageApi);
app.use("/api/todolist", toDoApi);
// dành cho cpnel
app.use(
  signInRouter, // http://localhost:3000/signin
  usersRouter, // http://localhost:3000/
  reportRouter // http://localhost:3000/report
);

app.listen(port, hostname, async () => {
  chat();
  console.log(`Server is running on port ${port} ${hostname}`);
});
