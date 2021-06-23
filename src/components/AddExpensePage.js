import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push("/");
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div clasName="content-container">
                        <h1 class_name="page-header__title">Add Expense</h1>
                        <div className="content-container">
                            <ExpenseForm 
                                onSubmit={this.onSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);