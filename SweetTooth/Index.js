const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const candyService = require('./services/candyService');
const offerService = require('./services/offerService');
const pinataService = require('./services/pinataService');
//------------------------------------------------------


app.use(bodyParser.json());
app.listen(3000, function(){
    console.log("its listening.. baby");
});

// GET all candies
app.get('/api/candies', function(req, res){
    candyService.getAllCandies(function(candies){
        return res.status(200).json(candies);
    }, function(err){
        return res.status(404).json(err);
    });
});
//POST - Create new candy
app.post('/api/candies', function(req, res){
    const bodyForCandy = req.body;
    candyService.createNewCandy(bodyForCandy, function(newCandy){
        return res.status(201).json(newCandy);
    },function(err){
        return res.status(400).json(err);
    });
});
//GET candy by ID
app.get('/api/candies/:id', function(req, res){
    const ID = req.params.id;
    candyService.getCandyById(ID, function(candy){
        return res.status(200).json(candy);
    }, function(err){
        return res.status(404).json(err);
    });
});

//GET all offers
app.get('/api/offers', function(req, res){
    console.log("1");
    offerService.getAllOffers(function(offers){
        console.log("HALLO BABTY")
        return res.status(200).json(offers);
    }, function(err){
        return res.status(404).json(err);
    });
});
// -------------------- Pinata -------------------

// GET all pinata
app.get('/api/pinatas', function(req, res){
    pinataService.getAllPinatas(function(pinatas){
        return res.status(200).json(pinatas);
    }, function(err){
        return res.status(404).json(err);
    });
});
//POST - Create new pinata
app.post('/api/pinatas', function(req, res){
    const bodyForPinata = req.body;
    pinataService.createNewPinata(bodyForPinata, function(newPinata){
        return res.status(201).json(newPinata);
    },function(err){
        return res.status(400).json(err);
    });
});
