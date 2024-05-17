import {configureStore} from "@reduxjs/toolkit"
import authSplice from "./authSllice";
authSplice
const store  = configureStore({
    reducer : {
        auth : authSplice,

    }
})

export default store;