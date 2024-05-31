"use client"
import React from 'react'
import board from './contact.module.scss'
import {Ifetch,noticeboard} from '../../model'
 import axios, { AxiosResponse } from 'axios'
interface ownporps{
addboard(obj : noticeboard) :void
}
const Boardwrite :React.FC<ownporps> =({addboard})=>{
const inputid= React.useRef<HTMLInputElement>(null)
const inputtext= React.useRef<HTMLInputElement>(null)
const [userid, setid] = React.useState<string>() 


    return (
    <div className={board.inputwrap}>
        {!userid && <input type="text"  id='idinput' ref={inputid}  placeholder='ID입력하세요' onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>{
            console.log(e ,'id인풋')
            if(e.code === "Enter"){
                let target =  e.target as HTMLInputElement
                e.preventDefault()
                setid(target.value)
                inputtext.current?.focus()
            }
            }}/>}
        {userid&& <input type="text" ref={inputtext} id='boardinput' placeholder='방명록을 입력하세요' onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>{
           if(e.code ==="Enter"){
            let target = e.target as HTMLInputElement   
            e.preventDefault();
            const date :Date = new Date()
            const createdate:string = (date.getMonth()+1) + '월' + date.getDate()+"일" + date.getHours() + "시" + date.getMinutes() +"분"
            let data ={
                content: target.value,
                create : createdate,
                userid 
            }
            addboard(data)
            target.value=''
            setid('')
           }
        }}/>}
    </div>
    )
}
export default Boardwrite