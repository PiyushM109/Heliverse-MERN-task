import { configureStore } from "@reduxjs/toolkit";
import TeamReducer from "./teamSlice"

const appStore = configureStore({
    reducer : {
        team : TeamReducer
    },
});

export default appStore;