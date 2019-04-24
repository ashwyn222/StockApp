const express = require('express');
const stockdata = require('stock-data.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', router);

router.get('/', (req, res) => {
    res.send("hello");
});

router.post('/getdata', (req, res) => {
  
  let { symbol } = req.body;

  stockdata.realtime({
    symbols: symbol,
    API_TOKEN: 'PXhqoylTBvdkWJDk1xTl8rSZ0fVJjPBOFFE1iZUttS41j1uyMTmgozeP8CaN',
  })
  .then(response => {
    res.send(response);
  })
  .catch(error => {
    res.send(error);
  });  
  
});





app.listen(5000, () => console.log("Server listening on port:", 5000));