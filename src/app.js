

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter"

import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

import "./firebase/firebase";


import "normalize.css/normalize.css";
import "./styles/styles.scss";

import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// addExpense -> water bill
// addExpense -> gas bill
// setTextFilter -> bill (2 items) -> water (1 item)
// getVisibleExpenses -> print visible ones to screen

store.subscribe(() => { 
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));



