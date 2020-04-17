const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a7af109a90cf8c29359c065434cbb6d9&query=' + latitude + ',' + longitude
    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('unable to connect to weather services :(', undefined)
        } else if (body.error) {
            callback('unable to find location :/', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It's " + body.current.temperature + ' degrees, and it feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast