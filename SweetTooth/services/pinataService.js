const db = require('../data/data');

idGenerator = function(){
    const lastItem = db.pinatas.pop();
    var newId = lastItem.id + 1;

    return newId;
};

generateRandomString = function() {
    let randomWord = Math.random().toString(36).substring(7);
    console.log("random", randomWord);
}

const pinataService = () => {
    const getAllPinatas = (cb, errorCb) => {
        try {
            const pinatas = db.pinatas;
            cb(pinatas);
        } catch (err) {
            errorCb(err);
        }
    };
    const getPinataById = (id, cb, errorCB) => {
        try {
            const item = db.pinatas.filter(d => d.id == id);
            cb(item);
        } catch (err) {
            errorCB(err);
        }
    };
    const createNewPinata = (newPinata, cb, errorCb) => {
        try {
            var newId = idGenerator();
            var randomString = generateRandomString();
            const newItem = {
                id: newId,
                name: newPinata.name,
                description: newPinata.description,
                surprise: randomString
            };

            db.candies.push(newItem);
            cb(newItem);
        } catch (err) {
            errorCb(err);
        }
    };

    return{
        getAllPinatas,
        getPinataById,
        createNewPinata
    };
};

module.exports = pinataService();