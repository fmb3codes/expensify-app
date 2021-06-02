import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses";

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test("should add expense", () => {
    const expense = {
        id: "4",
        description: "Gumball",
        note: "",
        amount: 200,
        createdAt: 0
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            note: "new value"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe("new value");
});

test("should not edit expenses if expense not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "5",
        updates: {
            note: "new value"
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("should set expenses", () => {
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});