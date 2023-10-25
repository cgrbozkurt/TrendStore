
import {createSlice, configureStore} from "@reduxjs/toolkit"

const initialState={
    counter:5,
    showCounter:true,
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
   reducers:{
    increment(state){
        state.counter++
    },
    decrement(state){
        state.counter--
    },
    increase(state,action){
        state.counter=state.counter + action.payload 
    },
    toogle(state){
        state.showCounter=!state.showCounter
    }
   }
})


const store = configureStore({
    reducer:counterSlice.reducer
});

export  const counterActions=counterSlice.actions;
export default store;