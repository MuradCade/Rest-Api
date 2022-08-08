const express = require('express');
const app = express();
const router  = require('./route');
app.use(express.json());


app.use('/api/users',router);
app.listen(process.env.PORT || '3000' ,()=>console.log(`Your Server Is Runnig On Port ${process.env.PORT || 3000}`))

