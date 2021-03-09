const express = require('express');

const app = express();

app.get('/courses', (request, response) => {
  return response.json(['Curso 1', 'Curso 2', 'Curso 3']);
});

app.post('/courses', (request, response) => {
  return response.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4']);
});

app.put('/courses/:id', (request, response) => {
  return response.json(['Curso 0', 'Curso 1', 'Curso 2', 'Curso 3']);
});

app.patch('/courses/:id', (request, response) => {
  return response.json(['Curso 0', 'Curso 01', 'Curso 2', 'Curso 3']);
});

app.delete('/courses/:id', (request, response) => {
  return response.json(['Curso 0', 'Curso 01']);
});

app.listen(3333);
