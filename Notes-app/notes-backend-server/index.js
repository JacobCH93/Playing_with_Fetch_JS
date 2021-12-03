const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let notes = [];

app.get('/notes', (req, res) => {
  res.send(JSON.stringify(notes));
});

app.post('/notes', (req, res) => {
  const newNote = {
    title: req.body.title,
    content: req.body.content
  };

  notes.push(newNote);
  res.send(JSON.stringify(newNote));
});

app.listen(port);

console.log(`Server listening on http://localhost:${port}`);