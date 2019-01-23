//preperation for data base use - in order to save best games results. 

const mongoService = require('./mongo-service')

const ObjectId = require('mongodb').ObjectId;

const COLLECTION_NAME = 'game';

function getById(id) {
    var _id = new ObjectId(id);
    return mongoService.connect()
        .then(db => db.collection(COLLECTION_NAME).findOne({ _id }))
        .then(user => {
            return game;
        }
    )
}

function add(game) {
    return mongoService.connect()
        .then(db => db.collection(COLLECTION_NAME).insertOne(game))
}

function update(_id, game) {
    _id = new ObjectId(_id)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection(COLLECTION_NAME);
            return collection.updateOne({ _id }, { $set: game })
                .then(res => {
                    return res.modifiedCount;
                })
        })
}

//not relevant for now
function remove(gameId) {
    gameId = new ObjectId(gameId)
    return mongoService.connect()
        .then(dbConn => {
            const userCollection = dbConn.collection(COLLECTION_NAME);
            return userCollection.remove({ _id: gameId })
    })
}







module.exports = {
    getById,
    add,
    update,
    remove
}