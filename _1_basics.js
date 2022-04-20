/**
 * Redux analogy with cake shop
 * shop = redux store
 * customer buy = action
 * shopkeeper = reducer
 */

const redux = require("redux");
const createStore = redux.createStore;

// action type
const BUY_CAKE = "BUY_CAKE";

// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

const initialState = {
  numOfCakes: 10,
};

// reducers
// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Store
/***
 * Redux Store
 * One store for entire application
 *
 * Responsibilities --
 * Hold app state
 * allow access to state via getState()
 * allow state to be updated via dispatch(action)
 * registes listeners via subscribe(listener)
 * handles unregistering of listeners via the function returned by subscribe(listener)
 */
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
