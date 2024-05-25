"use client"
import {useAppDispatch,useAppSelector} from '@/app/store/hook'
import {Themestore} from '@/app/store/module/themestore';
import React from 'react'
const Themechecker:React.FC = ()=>{
const select = useAppSelector(state=>state.persistedReducer.themestore.colortheme)
console.log(select  ,' 제작중임')
if(select=='light'){
    document.body.setAttribute('data-theme','light')
}else{
    document.body.setAttribute('data-theme','dark')
}
return (<></>)
}

export default Themechecker