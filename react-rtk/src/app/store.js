import { configureStore } from '@reduxjs/toolkit'
// import { createLogger } from 'redux-logger'

import cakeReducer from '../features/cake/cakeSlice'
import icecreamreducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const logger = createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamreducer,
        user: userReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store