const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.get('/products/:id', (req, res) => {

  const productId = req.params.id;

  res.send(`
      <h1>Product Detail</h1>
      <h2>Product ID : ${productId}</h2>

      <a href="/products">
        Back To Products
      </a>
  `);

});

app.listen(3000, () => {
  console.log('Kipper Shop running...');
});