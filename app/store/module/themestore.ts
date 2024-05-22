import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Imode} from "../../model"
const initialState = {
    themestate :'vsc' as Imode
}

export const Themestore = createSlice({
  name: "Themestore",
  initialState,
  reducers: {
    changetheme : (state, action:PayloadAction<Imode>)=>{
        state.themestate = action.payload
    }
    },
});

 
export default Themestore.reducer;