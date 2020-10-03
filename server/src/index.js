const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const middlewares = require('./middlewares');
const studentRouter = require('./routes/students');
const courseRouter = require('./routes/courses');

const app = express();

mongoose.connect('mongodb://localhost/student-reg', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use('/students', studentRouter);
app.use('/courses', courseRouter);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening at port: http://localhost:${port}`);
});
