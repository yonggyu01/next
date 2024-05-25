"use client"
import React from "react"
import { useAppDispatch,useAppSelector } from '@/app/store/hook';
import { Navi } from "./navi";
import Headerbar from './header/headerbar'
export const Navidivider:React.FC=()=>{

    const selector = useAppSelector(state => state.persistedReducer.themestore.themestate)
    console.log(selector)
    return (<>
        {selector=="vsc"? <Headerbar/> : <Navi/>}
    </>)
}