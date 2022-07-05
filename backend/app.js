const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://hong:hong@cluster0.mqw7iq6.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Database"))
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
