const db = require('../data/data');

const candyService = () => {
    const getAllOffers = (cb, errorCb) => {
        try {
            const candies = db.candies;
            cb(candies);
        } catch (err) {
            errorCb(err);
        }
    };


    return{
        getAllOffers
    };
};

module.exports = candyService();