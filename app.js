const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

// const url = 'https://api.darksky.net/forecast/a63d658f467233abfdf890a326223e0f/42.279790,-71.144510?units=us'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to Weather web service')
//     }
//     else if(response.body.error){
//         console.log('Unable to get the data')
//     }
//     else {        
//         console.log(response.body.daily.data[0].summary + ' It is currently 1 : ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + "% chance of rain.")
//     }
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })

if(process.argv.length!==3) {
    return console.log('It should be run as : node app.js [location name]')
}

geocode(process.argv[2], (error, {latitude, longtitude, location}) => {
    if (error) {
        return console.log('error:', error)
    }
    forecast(latitude, longtitude, (error, forecastData) => {
        if (error) {
            return console.log('error:', error)
        }
        console.log(location)
        console.log(forecastData)
    })
})