const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const tasks = require('./routes/api/tasks');

const app = express();


// bosyParser middleware
app.use(bodyParser.json());

// DB config
require('dotenv').config()
const db = process.env.MONGO_URI;

 console.log();

// Connect to mongo db
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(db,{ useNewUrlParser: true })
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));


  // Use routes
  app.use('/api/tasks',tasks)

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));