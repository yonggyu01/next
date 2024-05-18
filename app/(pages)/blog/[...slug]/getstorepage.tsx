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
    console.log(datalist , '잘받았음')
    const imgsrc = /https.+[$jpg]/igm
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    const hangul = /[ㄱ-ㅣ가-힣].+/gm
    const par = /(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi
        return(
            <section className="flex justify-center">
              
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="grid grid-cols-1 gap-8 ">
           <div className="lg:py-8">
            <h2 className="text-3xl font-bold sm:text-4xl  dark:text-white mb-2">{datalist[inumber]?.comment.title.replace(/\(.*?\)/,'')}</h2>
             <p className="mb-8 text-gray">작성일 : {datalist[inumber]?.comment.created.match(/\d{4}-\d{2}-\d{2}/)?.join('') } </p>
            {datalist[inumber]?.comment.body.split("\n").map((text,idx,arg)=>{    
                 if(text.match(/!.*\)/gm)&& arg.length-5 > idx){
                  return <img
                  alt=""
                  src={text.match(imgsrc)?.join('')}
                  className=" inset-0 w-full lg:w-3/4  object-cover mb-8 flex justify-center"
                />
                }else{
                  const mytext = text.replace(imgsrc, '').replace(/!.*\)/gm,'')
                return  <p className="mt-4 text-gray-600 mb-6 sm:text-base lg:text-xl dark:text-white">
                {mytext}
            </p>
                
                }
      
    })}
    
            <a  onClick={()=> window.location.href= '/blog'
            }
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            > 
    뒤로가기
            </a>
            <a  onClick={()=> window.location.href= `/blog/${pagename}/${Number(inumber)+1}`
            }
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
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