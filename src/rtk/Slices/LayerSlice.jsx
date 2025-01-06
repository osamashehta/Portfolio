import { createSlice } from '@reduxjs/toolkit'


export const layerSlice = createSlice({
    initialState: "hidden",
    name:"layerSlice",
    reducers:{
        handleOpen:(state,action)=>{
            
          return  state = "flex" ;
        },
        handleClose:(state,action)=>{

            return state = "hidden" ;
        },
        
    }
   
})


export const {handleOpen,handleClose} = layerSlice.actions
export default layerSlice.reducer