const mongoos = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

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