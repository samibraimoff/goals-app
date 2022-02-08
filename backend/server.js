const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { errorHandler } = require('./middlewares/error.middleware');
const connectDB = require('./config/db');

dotenv.config();

const PORT = process.env.PORT || 3030;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goal.routes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
