

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import AppRouter, { history } from "./routers/AppRouter"

import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";

import { firebase } from "./firebase/firebase";

import LoadingPage from "./components/LoadingPage";


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

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.id));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === "/") {
                history.push("/dashboard");
            }
        });
    } 
    else {
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
});

