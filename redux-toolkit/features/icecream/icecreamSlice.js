const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions

const initialState = {
    numOfIcecreams : 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        // no need to action because we only decrementing one
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams--
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice
.actions