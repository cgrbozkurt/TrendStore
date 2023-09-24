import { createSlice } from "@reduxjs/toolkit";

const initialState={
currentAccount:false,
accounts:[]
}

const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        //state Manipüle metodları 
    
    _setAccounts:(state,action)=>{
        
    }
    }
})