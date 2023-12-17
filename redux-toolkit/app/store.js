const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')

const cakeReducer = require('../features/cake/cakeSlice')
const icecreamreducer = require('../features/icecream/icecreamSlice')
const userReducer = require('../features/user/userSlice')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamreducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store