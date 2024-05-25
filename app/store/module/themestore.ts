import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Imode,colortheme} from "../../model"
const initialState = {
    themestate :'vsc' as Imode,
    colortheme : 'light' as colortheme,
    Terminal : false as boolean,
    selecticon : "vschome" as string
}

export const Themestore = createSlice({
  name: "Themestore",
  initialState,
  reducers: {
    changetheme : (state, action:PayloadAction<Imode>)=>{
        state.themestate = action.payload
    },
    changecolortheme : (state, action:PayloadAction<colortheme>)=>{
        state.colortheme = action.payload
    },
    setTerminal: (state,action:PayloadAction<boolean>)=>{
        state.Terminal = action.payload
    },
    setselecticon: (state,action:PayloadAction<string>)=>{
        state.selecticon = action.payload
    }
    },
});

 
export default Themestore.reducer;