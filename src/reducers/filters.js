import moment from "moment";

// Filters Reducer

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date", // date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            // return state.map((filter) => {
                return {
                    ...state,
                    text: action.text
                }
            // });
        case "SORT_BY_DATE":
            // return state.map((filter) => {
                return {
                    ...state,
                    sortBy: "date"
                }
            // });
        case "SORT_BY_AMOUNT":
            // return state.map((filter) => {
                return {
                    ...state,
                    sortBy: "amount"
                }
            // });
        case "SET_START_DATE":
            // return state.map((filter) => {
                return {
                    ...state,
                    startDate: action.startDate
                }
            // });
        case "SET_END_DATE":
            // return state.map((filter) => {
                return {
                    ...state,
                    endDate: action.endDate
                }
            // });
        default:
            return state;
    }
};