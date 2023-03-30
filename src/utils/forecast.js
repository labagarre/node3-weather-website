const request = require('request')



const forecast = (latitude, longitude, callback) => {
const url = 'https://api.weatherstack.com/current?access_key=a37888561519c0a0867a0ba50d117e1b&query=' + latitude + ',' + longitude + ' &units=m'

request({ url: url, json: true}, (error, res) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (res.body.error) {
        callback('Unable to find location', undefined)

    }else {
    callback(undefined, res.body.current.weather_descriptions[0] + '. It is currently ' + res.body.current.temperature + ' It feels like ' + res.body.current.feelslike + ' degress. The humidity is ' + res.body.current.humidity + '%.')

        }
    })
}


module.exports = forecast


