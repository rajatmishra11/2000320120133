// BookReducer.js
import { buy_book } from "./BookTypes";

// Contains initial state
const initialState = {
    NumberOfBooks: 20
};

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_book:
            return {
                ...state,
                NumberOfBooks: state.NumberOfBooks - 1 // Corrected subtraction
            };
        default:
            return state;
    }
};

export default BookReducer;
