const express = require('express');

const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('./swagger.js');


const app = express();

const port = 25000;


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {

  console.log(`Swagger UI running at http://localhost:${port}/`);

});
