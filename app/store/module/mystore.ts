import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Steemitdata,SteemitResult, body} from "../../model"
export const initialState = {
    blogdata : {
        react : Array<Steemitdata>(),
        vue :  Array<Steemitdata>(),
        skill :  Array<Steemitdata>(),
        cs :  Array<Steemitdata>(),
        next :  Array<Steemitdata>(),
        etc :  Array<Steemitdata>()
    }
}
export const Mystore = createSlice({
  name: "Mystore",
  initialState,
  reducers: {
    addreact:(state,action:PayloadAction<Steemitdata>)=>{
        if(!state.blogdata.react.includes(action.payload)){
            state.blogdata.react.push(action.payload)
        }},
    addskill:(state,action:PayloadAction<Steemitdata>)=>{
        if(!state.blogdata.skill.includes(action.payload)){
            state.blogdata.skill.push(action.payload)
        }
    },
    addcs:(state,action:PayloadAction<Steemitdata>)=>{
        if(!state.blogdata.cs.includes(action.payload)){
            state.blogdata.cs.push(action.payload)
        }
    },    
    addnext:(state,action:PayloadAction<Steemitdata>)=>{
        if(!state.blogdata.next.includes(action.payload)){
            state.blogdata.next.push(action.payload)
        }
    },
    addvue:(state,action:PayloadAction<Steemitdata>)=>{
        if(!state.blogdata.vue.includes(action.payload)){
            state.blogdata.vue.push(action.payload)
        }
    },
    addetc:(state,action:PayloadAction<Steemitdata>)=>{
        if(!state.blogdata.etc.includes(action.payload)){
            state.blogdata.etc.push(action.payload)
        }
    },
    },
});

 
export default Mystore.reducer;