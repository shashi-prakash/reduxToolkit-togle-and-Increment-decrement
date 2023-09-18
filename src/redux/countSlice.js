import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count:0
}
const countSlice = createSlice({
    name: 'Count',
    initialState:initialState,
    reducers:{
       increment(state){
        state.count += 1;
       },
       decrease(state){
        state.count -= 1
       }
    }
})

export const {increment, decrease} = countSlice.actions;
export default countSlice.reducer;