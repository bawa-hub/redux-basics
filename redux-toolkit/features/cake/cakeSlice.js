const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        // no need to action because we only decrementing one
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }

    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions