import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todosSlice";
import textReducer from "./textSlice";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        text: textReducer,
    },
});

export default store;