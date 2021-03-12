const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3080;

// place holder for the data
const items = [{ item: 'primer item' }, { item: 'segundo item' }];

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
app.use(bodyParser.json());

// app.use((req, res) => {
//   res.setHeader('Content-Type', 'text/plain');
//   res.write('you posted:\n');
//   res.end(JSON.stringify(req.body, null, 2));
// });

app.get('/api/users', (req, res) => {
  res.json(items);
});

app.post('/api/user', (req, res) => {
  const item = req.body;
  console.log('Adding user::::::::', item);
  items.push(item);
  res.json('user added');
});

app.get('/', (req, res) => {
  res.send('App Works !!!!');
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
