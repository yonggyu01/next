"use client"
import React from 'react'
import {Steemitdata,SteemitResult, body} from "@/app/model"
import {useAppSelector} from '@/app/store/hook'
import { slugprops } from './page'
import detail from './blogdetail.module.scss';
import { blogdata } from "../fetchblogdata";
import {
  useQuery,
} from '@tanstack/react-query';
interface ownprops{
params : slugprops
children? : React.ReactNode
}

const Getstorepage:React.FC<ownprops> = ({params})=>{
    const list = useAppSelector((state)=>state.persistedReducer.mystore.blogdata)
    const [ pagename ,  inumber] = params
    const select = useAppSelector(state => state.persistedReducer.themestore.themestate)
    const {data, isSuccess} = useQuery({
      queryKey: ['blogdatalist'],
      queryFn : blogdata,
      select:(a:SteemitResult):Steemitdata[]=>{return a.result.filter((x:Steemitdata) => {
        let {tags} = JSON.parse(x.comment.json_metadata) 
        if(pagename === 'review'){
          for(let a of tags){
            if(a === 'yongreact' || a === 'yongvue' || a === 'yongetc' ||   a=== 'yongnext' ){
           return x  ;
          }}
         }else if(pagename === 'skill'){
           for(let a of tags){
             if(a === 'yongskill'){
           return x  ;
         }
         }}else if(pagename === 'project'){
           for(let a of tags){
             if(a === 'yongreview'){
           return x  ;
         } }
         }else if(pagename === 'cs'){
           for(let a of tags){
             if(a === 'yongcs'){
           return x  ;
         } }
         }})        
      }
    })
    React.useEffect(()=>{
      
    },[isSuccess])
    // console.log(data,'리엑트 쿼리 넘어온값 디테일페이지')
    // const select = useAppSelector(state => state.persistedReducer.themestore.themestate)
    // const makelist =(pname:string):Steemitdata[]=>{
    //     let data:Steemitdata[] = []
    //     switch(pname){
    //         case "react" : 
    //         data =list.react
    //         break;
    //         case "vue":
    //         data =list.vue
    //         break;
    //         case "skill":
    //         data =list.skill
    //         break;
    //         case "cs":
    //         data =list.cs
    //         break;
    //         case "next" :
    //           data =list.next
    //         break;
    //         case "review" :
    //           data =list.review
    //         break;
    //     } 
    //     return data
    // }
    // const datalist : Steemitdata[] = makelist(pagename)
    // console.log(datalist , '잘받았음', list, 'store값임')
    const imgsrc = /https.+[$jpg]/igm
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    const hangul = /[ㄱ-ㅣ가-힣].+/gm
    const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
        return(
            <section className={detail.detailsection}>
              
      <div className={detail.detailwrap}>
        <div className={detail.detailgrid}>
           <div className={detail.go}>
            <h2 className={detail.detailtitle}>{isSuccess&&data[inumber]?.comment.title.replace(/\(.*?\)/,'')}</h2>
             <p className={detail.detaildate}>작성일 : {isSuccess&&data[inumber]?.comment.created.match(/\d{4}-\d{2}-\d{2}/)?.join('') } </p>
            {isSuccess&&data[inumber]?.comment.body.split("\n").map((text,idx,arg)=>{    
                 if(text.match(/!.*\)/gm)&& arg.length-1 > idx){
                  return <img
                  alt=""
                  src={text.match(imgsrc)?.join('')}
                  className={detail.detailtitleimg}
                />
                }else{
                const mytext = text.replace(imgsrc, '').replace(/!.*\)/gm,'')
                return  <p className={detail.detailcontent}>
                {mytext}
            </p>
                
                }
      
    })}
    
            <a  onClick={()=> {
              select==='vsc'? window.location.href='/vscblog'  :  window.location.href= '/blog'
            }}
              className={detail.backbtn}
            > 
    뒤로가기
            </a>
            <a  onClick={()=> {
              if(isSuccess&& Number(inumber)+1 < data?.length) {
                window.location.href= `/blog/${pagename}/${Number(inumber)+1}`
              }
              else{alert('다음페이지가 없습니다.')}
            }}
              className={detail.nextbtn}
            > 
    다음글
            </a>
          </div>
        </div>
      </div>
    </section>
        )
    }
export default Getstorepage