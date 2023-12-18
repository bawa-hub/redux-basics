import { createSlice } from '@reduxjs/toolkit'

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

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions