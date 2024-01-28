import { configureStore } from "@reduxjs/toolkit";
import userdata from './UserSlice';


const store  = configureStore({
    reducer:{
        users:userdata
    },
})

export default store;