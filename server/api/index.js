//to handle server traffic
const express = require('express'); //express rounting
const router = express.Router();

//weather class from weather.js to call the method that gets data from api
const Weather = require('./weather');

// GET request -  statically get the weather data from the weather api
router.get("/weather", async(req, res) => {
    let weather = new Weather();

    //hardCoded at the moment to test
    let weatherData = await weather.getWeatherData(98852, "us");

    //resonse will be prettier json
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

//POST Request - dynamically get the weather data based on request body
router.post("/weather", async(req,res)=>{
    const {zipCode, tempMetric} = req.body;
    let weather = new Weather();

    //The params for zipCode and tempMetric are dynamic
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

router.post("/weatherMongo", async(req,res) => {
    const {zipCode, tempMetric} = req.body;
    let weather = new weather();
    let weatherData = await weather.getWeatherData(zipCode, tempMetric);

    await weather.saveWeatherDataToMongo(zipCode, weatherData);
    res.header("Content-type", 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

router.get("/weatherMogo", async(req, res) =>{
    const {zipCode} = req.query;
    let weather = new Weather();

    let weahterData = await weather.getWeatherDataFromMongo(zipCode);

    res.header("Content-type", 'application/json');
    res.send(JSON.stringify(weatherData, null, 4));
});

module.exports = router;