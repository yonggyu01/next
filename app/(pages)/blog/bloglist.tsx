"use client"
import Image from "next/image";
import React, { useEffect } from 'react'
import {Steemitdata,SteemitResult, body} from "../../model"
import {Reactpage} from './reactpage';
import { blogdata } from "./fetchblogdata";
import bloglist from './blog.module.scss'
import {Mystore} from "@/app/store/module/mystore";
import { useAppDispatch,useAppSelector } from '../../store/hook';
import {
  useQuery,
} from '@tanstack/react-query';
interface ownprops {
  data : SteemitResult
}
export const Bloglist :React.FC = () => {
  const dispatch = useAppDispatch()
  const mydata = useQuery({
    queryKey: ['blogdatalist'],
    queryFn : blogdata,
  })
  const list  = useAppSelector(state => state.persistedReducer.mystore.blogdata)
  console.log(mydata , '리엑트 쿼리 잘 동작하나?',mydata.status)
  const [myreact,setreact] = React.useState<Steemitdata[]>([])
  const [myvue,setvue] =  React.useState<Steemitdata[]>([])
  const [myreview,setreview] =  React.useState<Steemitdata[]>([])
  const [myskill,setskill] =  React.useState<Steemitdata[]>([])
  const [mycs,setcs] =  React.useState<Steemitdata[]>([])
  const reactproject = React.useRef<Steemitdata[]>([])
  const [render,setrender]= React.useState<boolean>(false)
    // mydata.status==='success' ?  reactproject.current = mydata.data.result : null 
  
  // console.log(myreact, '잘들어오나 보자')
  function additem (item:Steemitdata,idx?:number ){
    if(!reactproject.current.includes(item)){
      reactproject.current= [...reactproject.current, item]
    }
    if(idx){
      setrender(true)
    }
  }
  React.useEffect(()=>{
    if(mydata.isSuccess){
      mydata.data.result.forEach((item,idx,array)=>{
        if(idx!==array.length-1){
          additem(item)
        }else{
          additem(item,idx)
        }
      })
    }
    setrender(false)
  },[mydata.isSuccess,render])
   
   function filterHashtag(array:Steemitdata[]){
         array.forEach(item =>{
          let {tags} = JSON.parse(item.comment.json_metadata)  
          if (Array.isArray(tags)){
              for(let x of tags){
                if(x === 'yongreact' || x === 'yongvue' || x === 'yongetc' ||   x=== 'yongnext' ){
                  setreact(prevState => {
                    if(!prevState.includes(item)){return prevState = [...prevState, item]}
                  return prevState})
                  // dispatch(Mystore.actions.addreact(item))
                  // setreact([...myreact, item])
                  // console.log(myreact, '일치',item)
                }else if( x=== 'yongcs'){
                    setcs(prevState => {
                      if(!prevState.includes(item)){return prevState = [...prevState, item]}
                    return prevState})
                    // dispatch(Mystore.actions.addcs(item))
                    // console.log(mycs, 'cs 일치',item)
                   }else if( x=== 'yongskill'){
                    setskill(prevState => {
                      if(!prevState.includes(item)){return prevState = [...prevState, item]}
                    return prevState})
                    // dispatch(Mystore.actions.addskill(item))
                    // console.log(mycs, 'cs 일치',item)
                   
                   }else if( x=== 'yongreview'){
                    setreview(prevState => {
                      if(!prevState.includes(item)){return prevState = [...prevState, item]}
                    return prevState})
                    // dispatch(Mystore.actions.addskill(item))
                    // console.log(mycs, 'cs 일치',item)
                   }
              }
            }
        })
         
      }

    const imgsrc = /https.+[$jpg]/i
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    console.log(myreact,'리엑트',myvue,mycs,'cs')
    return (
        <div className={bloglist.reactwrap}>
          <h1 className={bloglist.dtitle}>기술블로그</h1>
        <Reactpage data1={myskill} title='skill' check='skill'></Reactpage>
        <h1  className={bloglist.dtitle} >개발회고</h1>
        <Reactpage data1={myreact} title='review' check="react"></Reactpage>
        <h1  className={bloglist.dtitle}>프로젝트회고</h1>
        <Reactpage data1={myreview} title='project' check='review'></Reactpage>
        <h1  className={bloglist.dtitle}>cs공부지식 회고</h1>
        <Reactpage data1={mycs} title='cs' check='cs'></Reactpage>
        </div>       
    )
}