const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2JzdG8iLCJhIjoiY2s4dmpiNTFtMDF1bjNtbGJodjZmbnExbiJ9.cTH6DXgkBks998QVggUy-w'
    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        if (error) {
            callback('unable to connect to location services :(', undefined)
        } else if (body.features.length === 0) {
            callback('unable to find location, try another search :/', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].geometry.coordinates[1],
                longitude: body.features[0].geometry.coordinates[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode