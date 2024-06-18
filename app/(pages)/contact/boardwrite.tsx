"use client"
import React from 'react'
import board from './contact.module.scss'
import {Ifetch,noticeboard} from '../../model'
 import axios, { AxiosResponse } from 'axios'
 import { fetchadd } from './fetchadd'
 import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
    useQueryClient,
    DehydratedState,
    useQuery,
    useMutation
  } from '@tanstack/react-query';
interface ownporps{
addboard(obj : noticeboard) :void
}
const Boardwrite :React.FC<ownporps> =({addboard})=>{
const inputid= React.useRef<HTMLInputElement>(null)
const inputmoid= React.useRef<HTMLInputElement>(null)
const inputtext= React.useRef<HTMLInputElement>(null)
const inputtext1= React.useRef<HTMLInputElement>(null)
const [userid, setid] = React.useState<string>() 
const [moid, setmoid] = React.useState<string>() 
const [usertext, settext] = React.useState<string>() 

const queryClient = useQueryClient()
const {mutate, data, isSuccess} = useMutation({
    mutationFn : fetchadd,
    onSuccess:()=>{
        queryClient.invalidateQueries({queryKey:['contactdata']})
    }
})

    return (
    <div className={board.inputwrap}>
        {!userid && <div className={board.flexinput}><input type="text" className={board.idinput} id='idinput' ref={inputid}  placeholder='ID입력하세요' onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>{
            console.log(e ,'id인풋')
            if(e.code === "Enter"){
                let target =  e.target as HTMLInputElement
                e.preventDefault()
                setid(target.value)
                inputtext.current?.focus()
            }
            }}/>
            <input type="text" className={board.moidinput} ref={inputmoid}  placeholder='ID입력하세요' value={moid} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
              let target =  e.target as HTMLInputElement
                e.preventDefault()
                setmoid(target.value)            
            }
            }/>
              <button className={board.sendbtn} onClick={(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
         e.preventDefault();
         if(moid==undefined){
            alert('id를 입력해주세요')
            return;}
            setid(moid)
        }}> send </button>
            </div>}
        {userid&& <div className={board.flexinput}>
            <input className={board.webinput} type="text" ref={inputtext} id='boardinput' placeholder='방명록을 입력하세요' onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>)=>{
           if(e.code ==="Enter" || e.code ==="NumpadEnter"){
            let target = e.target as HTMLInputElement   
            e.preventDefault();
            const date :Date = new Date()
            const createdate:string = (date.getMonth()+1) + '월' + date.getDate()+"일" + date.getHours() + "시" + date.getMinutes() +"분"
            let data ={
                content: target.value,
                create : createdate,
                userid 
            }
            // addboard(data)
            mutate(data)
            target.value=''
            setid('')
           }
        }} />
        <input className={board.mobinput} type="text" ref={inputtext1} id='mobinput' placeholder='방명록을 입력하세요' value={usertext} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
            let target = e.target as HTMLInputElement   
            e.preventDefault();
            settext(target.value)//모바일환경을 위해 전송버튼 추가를 위해 넣음
            console.log(usertext ,'입력이 잘 되고있는지')
        }}/>
         <button className={board.sendbtn} onClick={(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
         e.preventDefault();
         if(usertext==undefined){
            alert('내용을 입력해주세요')
            return;}
         const date :Date = new Date()
         const createdate:string = (date.getMonth()+1) + '월' + date.getDate()+"일" + date.getHours() + "시" + date.getMinutes() +"분"
         let data:noticeboard ={
             content: usertext,
             create : createdate,
             userid 
         }
         mutate(data)
        //  addboard(data)
        }}> send </button>
        </div>}
    </div>
    )
}
export default Boardwrite