"use client"
import React from 'react'
import {Steemitdata,SteemitResult, body} from "@/app/model"
import {useAppSelector} from '@/app/store/hook'
import { slugprops } from './page'
import detail from './blogdetail.module.scss'
interface ownprops{
params : slugprops
children? : React.ReactNode
}

const Getstorepage:React.FC<ownprops> = ({params})=>{
    const list = useAppSelector((state)=>state.persistedReducer.mystore.blogdata)
    const [ pagename ,  inumber] = params
    const makelist =(pname:string):Steemitdata[]=>{
        let data:Steemitdata[] = []
        switch(pname){
            case "react" : 
            data =list.react
            break;
            case "vue":
            data =list.vue
            break;
            case "skill":
            data =list.skill
            break;
            case "cs":
            data =list.cs
            break;
            case "next" :
              data =list.next
            break;
        } 
        return data
    }
    const datalist : Steemitdata[] = makelist(pagename)
    console.log(datalist , '잘받았음', list, 'store값임')
    const imgsrc = /https.+[$jpg]/igm
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    const hangul = /[ㄱ-ㅣ가-힣].+/gm
    const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
        return(
            <section className={detail.detailsection}>
              
      <div className={detail.detailwrap}>
        <div className={detail.detailgrid}>
           <div className=''>
            <h2 className={detail.detailtitle}>{datalist[inumber]?.comment.title.replace(/\(.*?\)/,'')}</h2>
             <p className={detail.detaildate}>작성일 : {datalist[inumber]?.comment.created.match(/\d{4}-\d{2}-\d{2}/)?.join('') } </p>
            {datalist[inumber]?.comment.body.split("\n").map((text,idx,arg)=>{    
                 if(text.match(/!.*\)/gm)&& arg.length-4 > idx){
                  return <img
                  alt=""
                  src={text.match(imgsrc)?.join('')}
                  className={detail.detailtitleimg}
                />
                }else{
                const mytext = text.replace(imgsrc, '').replace(/!.*\)/gm,'').replace(/스테픈.*/gm,'').replace(/<hr>.*/g,'')
                return  <p className={detail.detailcontent}>
                {mytext}
            </p>
                
                }
      
    })}
    
            <a  onClick={()=> window.location.href= '/blog'
            }
              className={detail.backbtn}
            > 
    뒤로가기
            </a>
            <a  onClick={()=> {
              if(Number(inumber)+1 <datalist.length) {window.location.href= `/blog/${pagename}/${Number(inumber)+1}`}
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