const express = require('express');
const router = require('./routes/router');
const app = express();
const cors = require('cors');

const port = 3081;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from wish list server' });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

router(app);
module.exports = app;
