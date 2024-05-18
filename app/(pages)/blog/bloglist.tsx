"use client"
import Image from "next/image";
import React, { useEffect } from 'react'
import {Steemitdata,SteemitResult, body} from "../../model"
import {Reactpage} from './reactpage'
import bloglist from './blog.module.scss'
import {Mystore} from "@/app/store/module/mystore";
import { useAppDispatch,useAppSelector } from '../../store/hook';
interface ownprops {
  data : SteemitResult
}
export const Bloglist :React.FC<ownprops> = ({data}) => {
  const dispatch = useAppDispatch()
  const list  = useAppSelector(state => state.persistedReducer.mystore.blogdata)
  console.log(list)
  const [myreact,setreact] = React.useState<Steemitdata[]>([])
  const [setdata,  setnewdata] = React.useState(new Set(myreact))
  const [myvue,setvue] =  React.useState<Steemitdata[]>([])
  const [myetc,setetc] =  React.useState<Steemitdata[]>([])
  const [mynext,setnext] =  React.useState<Steemitdata[]>([])
  const [myskill,setskill] =  React.useState<Steemitdata[]>([])
  const [mycs,setcs] =  React.useState<Steemitdata[]>([])
  const [csdata,  setcsdata] = React.useState(new Set(mycs))
  const [nextdata,  setnextdata] = React.useState(new Set(mycs))
  const [skilldata,  setskilldata] = React.useState(new Set(mycs))
  
  console.log(data.result)
    function filterHashtag(array:Steemitdata[]){
      array.forEach(item =>{
          let {tags} = JSON.parse(item.comment.json_metadata)  
          if (Array.isArray(tags)){
              for(let x of tags){
                if(x === 'yongreact'){
                  setreact(prevState => [...prevState, item]);
                  setdata.add(item)
                  dispatch(Mystore.actions.addreact(item))
                  // setreact([...myreact, item])
                  // console.log(myreact, '일치',item)
                }else if(x === 'yongvue'){
                  setvue(prevState => [...prevState, item]);
                    // setvue([...myvue,item])
                    dispatch(Mystore.actions.addvue(item))
                }else if(x === 'yongetc'){
                  //  setetc([...myetc,item])
                  setetc(prevState => [...prevState, item]);
                  dispatch(Mystore.actions.addetc(item))
                }else if( x=== 'yongnext'){
                  setnext(prevState => [...prevState, item]);
                  nextdata.add(item)
                  dispatch(Mystore.actions.addnext(item))
                  }else if( x=== 'yongcs'){
                    setcs(prevState => [...prevState, item]);
                    csdata.add(item)
                    dispatch(Mystore.actions.addcs(item))
                    // console.log(mycs, 'cs 일치',item)
                   }else if( x=== 'yongskill'){
                    setskill(prevState => [...prevState, item]);
                    dispatch(Mystore.actions.addskill(item))
                    skilldata.add(item)
                    // console.log(mycs, 'cs 일치',item)
                   }
              }
            }
        })
         
      }
      console.log(setdata)
    useEffect(()=>{
      filterHashtag(data.result) 
    },[])
    const imgsrc = /https.+[$jpg]/i
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    console.log(myreact,'리엑트',myvue,mycs,'cs')
    return (
        <div>
          {/* <h1> 블로그입니다. </h1> */}

        <div className={bloglist.reactwrap}>
        <Reactpage data={[...skilldata]} title='기술블로그' check='skill'></Reactpage>
        <Reactpage data={[...setdata]} title='React' check="react"></Reactpage>
        <Reactpage data={[...csdata]} title='Cs 기본지식' check='cs'></Reactpage>
        <Reactpage data={[...nextdata]} title='next 기본지식' check='next'></Reactpage>
        </div>



        </div>
    )
}