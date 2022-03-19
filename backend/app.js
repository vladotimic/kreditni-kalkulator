require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
const connectToDB = require('./db/connect');
const loanRouter = require('./routes/loanRoutes');
const { errorMiddleware, notFoundMiddleware } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/loans', loanRouter);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async () => {
  try {
    await connectToDB;
    app.listen(5000, console.log('Server is running on port 5000'));
  } catch (error) {
    console.error(`Can't connect to MongoDB, error: ${error}`);
  }
};
start();
