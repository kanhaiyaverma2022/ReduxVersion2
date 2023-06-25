import {createSlice} from '@reduxjs/toolkit'



const intialState={
    numOfCakes:150
}



const cakeSlice = createSlice({
    name: 'cake',
    initialState :intialState,

    reducers:{
        ordered:(state)=>{
            state.numOfCakes--
           
        },
        restocked:
            (state,action)=> {
              state.numOfCakes+= action.payload
            }
        }

    
})

export default cakeSlice.reducer
export const {ordered,restocked}= cakeSlice.actions