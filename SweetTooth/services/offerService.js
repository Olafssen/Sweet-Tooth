const db = require('../data/data');

const Offer = require('../data/data').offers;
const Candy = require('../data/data').candies;


const candyService = () => {
    const getAllOffers = (cb, errorCb) => {
        try {
            //const candies = db.candies;
            //cb(candies);
            //var items = db.candies.map(o => ({...o, }));
            
            
            //db.candies.forEach(element => {
                
            //});
            console.log("2");
            const baby = Offer.map(o => ({ ...o, candies: o.candies.map(c1 => Candy.find(c2 => c2.id === c1)) }));

            console.log(baby);
            return baby;
        } catch (err) {
            errorCb(err);
        }
    };


    return{
        getAllOffers
    };
};

module.exports = candyService();