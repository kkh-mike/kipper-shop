const products = require('./data/products');
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/products', (req, res) => {

  let html = `
    <h1>Product List</h1>
    <hr>
  `;

  products.forEach(product => {

    html += `
      <div style="margin-bottom:20px">

        <h2>${product.name}</h2>

        <p>
          Price: $${product.price}
        </p>

        <a href="/products/${product.id}">
          View Detail
        </a>

      </div>
    `;

  });

  res.send(html);

});

app.get('/products/:id', (req, res) => {

  const productId = parseInt(req.params.id);

  const product = products.find(
    p => p.id === productId
  );

  if (!product) {
    return res.send('Product not found');
  }

  res.send(`
    <h1>${product.name}</h1>

    <h2>Price: $${product.price}</h2>

    <p>${product.description}</p>

    <a href="/products">
      Back To Products
    </a>
  `);

});

app.listen(3000, () => {
  console.log('Kipper Shop running...');
});