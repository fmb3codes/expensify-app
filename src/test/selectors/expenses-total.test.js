import selectExpenseTotal from "../../selectors/expenses-total.js";
import expenses from "../fixtures/expenses";

const total = selectExpenseTotal(expenses);
console.log(total);

test("should return 0 if no expenses", () => {
    const zeroSum = selectExpenseTotal([]);
    expect(zeroSum).toBe(0);
});

test("should correctly add up a single expnese", () => {
    const singleSum = selectExpenseTotal([expenses[0]]);
    expect(singleSum).toBe(195);
});

test("should correctly add up multiple expenses", () => {
    const totalSum = selectExpenseTotal(expenses);
    expect(totalSum).toBe(114195);
});