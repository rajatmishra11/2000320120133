import { createStore } from 'redux'; // Import createStore from redux, not react-redux
import BookReducer from "./BookReducer";

const store = createStore(BookReducer);
// Redux store holds state of Application
export default store;