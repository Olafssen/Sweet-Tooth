const db = require('../data/data');

const candyService = () => {
    const getAllOffers = (cb, errorCb) => {
        try {
            //const candies = db.candies;
            //cb(candies);
            var items = db.candies;
            
            
            db.candies.forEach(element => {
                
            });
        } catch (err) {
            errorCb(err);
        }
    };


    return{
        getAllOffers
    };
};

module.exports = candyService();