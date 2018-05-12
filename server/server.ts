const path = require("path");
import * as express from 'express';

const publicPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT ||  3000;

app.use(express.static(publicPath));

app.listen(3000, ()=> {
    console.log(`Server is up on port ${port}`);
});

// console.log(__dirname + '../public');
// console.log(publicPath);