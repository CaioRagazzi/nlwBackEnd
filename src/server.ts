import express from "express";

const app = express();

app.get('/users', (req, res) => {
  res.json([ 'caio', 'teste' ])
})

app.listen(3333);