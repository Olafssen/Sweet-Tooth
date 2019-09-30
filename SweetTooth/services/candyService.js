const db = require('../data/data');

idGenerator = function(){
    const lastItem = db.candies.pop();
    var newId = lastItem.id + 1;

    return newId;
};

const candyService = () => {
    const getAllCandies = (cb, errorCb) => {
        try {
            const candies = db.candies;
            cb(candies);
        } catch (err) {
            errorCb(err);
        }
    };
    const createNewCandy = (newCandy, cb, errorCb) => {
        try {
            var newId = idGenerator();
            const newItem = {
                id: newId,
                name: newCandy.name,
                description: newCandy.description
            };

            db.candies.push(newItem);
            cb(newItem);
        } catch (err) {
            errorCb(err);
        }
    };
    const getCandyById = (id, cb, errorCB) => {
        try {
            const item = db.candies.filter(d => d.id == id);
            cb(item);
        } catch (err) {
            errorCB(err);
        }
    };

    return{
        getAllCandies,
        createNewCandy,
        getCandyById
    };
};

module.exports = candyService();