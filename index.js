const express = require("express");
const mongoose = require("mongoose");
const payloadRoutes = require('./routes/api/payload')
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/payload', payloadRoutes)

const PORT = process.env.PORT || 4400;

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`server running on port: ${PORT} and database is connected`)
    )
  )
  .catch((e) => console.log(e.message));
