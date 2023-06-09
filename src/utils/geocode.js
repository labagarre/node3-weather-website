const request = require('request') 

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGFiYWdhcnJlIiwiYSI6ImNsZm13YXMxczBnMXEzeWxrYnA1b29wM2EifQ.3_YN85pIeLi15_VtX6wRcA'

      
    request({ url, json: true}, (error, res) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (res.body.features.length === 0) {
            callback('Unable to find location. Please try another search.', undefined)
    
        }  else {
        
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
         }
    })
}
   
module.exports = geocode