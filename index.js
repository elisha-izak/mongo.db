require ("dotenv").config();
const express = require('express');
const app = express();
require('./DL/DB/db').connect()
const cors = require('cors');
const mainRouter = require('./routes/main.router');
const PORT = process.env.PORT || 1234;


app.use(cors());
app.use(express.json());


app.use('/api', mainRouter)




app.listen(PORT, ()=>{
    console.log('listening on *:' + PORT);
})