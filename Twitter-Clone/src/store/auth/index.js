import { createSlice } from "@reduxjs/toolkit";

const initialState={
currentAccount:   {
    id:1,
    username:"Bozkurt",
    fullName:"Çağrı Bozkurt",
    avatar:"https://twitter.com/arBozkurt7/photo"
},
accounts:[]
}

const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        //state Manipüle metodları 
    
    _addAccounts:(state,action)=>{
        state.accounts.push(action.payload)
    },
    _removeAccounts:(state,action)=>{
state.accounts=state.action.filter(account=>account.id !== action.payload)
if( state.currentAccount&& action.payload===state.currentAccount.id){
this._setCurrentAccount(false)
}
    },
    _setCurrentAccount:(state,action)=>{
        state.currentAccount=action.payload
    }
    }
})

export const {_addAccounts,_removeAccounts,_setCurrentAccount}=auth.actions;
export default auth.reducer