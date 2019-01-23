var dbConn = null;
const url = 'mongodb://<dbuser>:<dbpassword>@ds026898.mlab.com:26898/draw';


//preperation for data base use - in order to save best games results. 

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    
    
    return MongoClient.connect(url, { useNewUrlParser: true })
        .then(client => {
            console.log('Connected to MongoDB');
            
            // If we get disconnected (e.g. db is down)
            client.on('close', ()=>{
                console.log('MongoDB Diconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}

module.exports = {
    connect : connectToMongo
}
