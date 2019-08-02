const geocode = require('./utils/geocode')
debugger
geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
