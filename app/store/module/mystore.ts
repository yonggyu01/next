import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Steemitdata,SteemitResult} from "../../model"


export const initialState = {
    blogdata : {
        react : [] as Steemitdata[],
        vue :  [] as Steemitdata[],
        skill :  [] as Steemitdata[],
        cs :  [] as Steemitdata[],
        next :  [] as Steemitdata[],
        etc :  [] as Steemitdata[]
    }
}

export const Mystore = createSlice({
  name: "Mystore",
  initialState,
  reducers: {
    addreact:(state,action:PayloadAction<Steemitdata[]>)=>{
            state.blogdata.react= action.payload
    },
    addskill:(state,action:PayloadAction<Steemitdata[]>)=>{
                  state.blogdata.skill =action.payload
          },
    addcs:(state,action:PayloadAction<Steemitdata[]>)=>{
       
        state.blogdata.cs =action.payload
    },    
    addnext:(state,action:PayloadAction<Steemitdata[]>)=>{
        state.blogdata.next =action.payload
    },
    addvue:(state,action:PayloadAction<Steemitdata[]>)=>{
        state.blogdata.vue =action.payload
    },
    addetc:(state,action:PayloadAction<Steemitdata[]>)=>{
        state.blogdata.etc =action.payload
    }
    },
});

 
export default Mystore.reducer;