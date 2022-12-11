const mongoos = require('mongoose')

const MONGO_URL = 'mongodb+srv://admin:pasadm123@cluster0.h2piol1.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        mongoos.connect(MONGO_URL,
            {useNewUrlParser: true, useUnifiedTopology: true},
            (err)=>{
                if(err) throw "error: " + err 

                console.log('Connectoin Success');
            })
    }
    catch(error){
        console.log('ERROR: ' + error)
        throw error;
    }
}

module.exports = {connect};