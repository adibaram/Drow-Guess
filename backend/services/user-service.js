const mongoService = require('./mongo-service')

const ObjectId = require('mongodb').ObjectId;

const COLLECTION_NAME = 'user';

function getById(id) {
    var _id = new ObjectId(id);
    return mongoService.connect()
        .then(db => db.collection(COLLECTION_NAME).findOne({ _id }))
        .then(user => {
            return user;
        }
    )
}

function add(user) {
    return mongoService.connect()
        .then(db => db.collection(COLLECTION_NAME).insertOne(user))
}

function update(_id, user) {
    _id = new ObjectId(_id)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection(COLLECTION_NAME);
            return collection.updateOne({ _id }, { $set: user })
                .then(res => {
                    return res.modifiedCount;
                })
        })
}

//not relevant for now
function remove(userId) {
    userId = new ObjectId(userId)
    return mongoService.connect()
        .then(dbConn => {
            const userCollection = dbConn.collection(COLLECTION_NAME);
            return userCollection.remove({ _id: userId })
    })
}







module.exports = {
    getById,
    add,
    update,
    remove
}