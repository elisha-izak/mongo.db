const express = require('express');
const app = express();
require('./DL/DB/db').connect()
const cors = require('cors');
const { application } = require('express');
const userRouter = require('./routes/user.router')
// const otderRouter = require('./routes/order.router')
// const productRouter = require('./routes/product.router')



app.use(cors());
app.use(express.json());


app.use('/user',userRouter)




app.listen(3120, ()=>{
    console.log('listening on *:3120');
})