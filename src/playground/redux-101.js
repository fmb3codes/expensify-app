import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ( { count } ) => ({
    type: "SET",
    count
});

const resetCount = () => ({
    type: "RESET",
});

// Reducers
// 1. Reducers are pure functions 
//-- output only determined by the input -- 
//-- don't modify variables outside of scope --
// 2. Never change state or action

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case "RESET":
            return {
                count: 0
            };
        case "SET":
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());


store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 5 }));

