"use client"
import React from 'react'
import {Steemitdata,SteemitResult, body} from "../../model"
import reactblog from './blog.module.scss'
interface Ownprops {
    data : Steemitdata[]
    title : string
    check : string
}
export const Reactpage :React.FC<Ownprops> = ({data,title,check}) => {
    const [render, setrender] = React.useState<boolean>(false)
    React.useEffect(()=>{
      if(moveli.current.length > 3 ){
        setrender(true)
      }else {
        setrender(false)
      }

    },[render])
    const imgsrc = /https.+[$jpg]/i
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    const moveli  = React.useRef<HTMLAnchorElement[]>([])  
    let liindex :number = 0
    function movingscroll(action: string){
      if(action === 'left' && liindex < moveli.current.length-3 && liindex >0){
        --liindex 
      }else if(action === 'right' && liindex < moveli.current.length && liindex >=0 ){++liindex}
      // console.log(liindex, 'idx',moveli.current[liindex])
      moveli.current[moveli.current.length%(liindex*4)]?.scrollIntoView({
         behavior: "smooth", block: "nearest", inline: "start" 
        })
    }
    // console.log(typeof moveli.current.length, `${title} title`)
    return (
        <div className={reactblog.leftmargin}>
            {render ?  <div className={reactblog.listbtn}> 
        <button className={reactblog.listbtnLeft} onClick={()=>{
          movingscroll('left')
        }}>&lt;</button>
        <button className={reactblog.listbtnRight} onClick={()=>{
          movingscroll('right')
        }}>&gt;</button>
        </div> : <></>}
        <h1 className={reactblog.retitle}> {title}</h1>
        <div className={reactblog.reactflexbox}>
      
{data && data.map((x:Steemitdata,idx:number)=>{ return <a key={x.comment.title+x.comment.created} 
      ref={item =>{ // 각각의 a 태그가 생성될 때마다 moveli 배열에 추가
                        if (item && !moveli.current.includes(item)) {
                            moveli.current.push(item);
                            setrender(true)
                        }}} 
                        onClick={()=>{  
                   }} className={reactblog.reactwrapa} href={`/blog/${check}/${idx}`}>
                   <article className={reactblog.reactwraparticle}>
      <img
        alt={x.comment.title}
        src={x.comment.body.match(imgsrc)?.filter((a,idx)=> idx <1 ).join('')}
        className={reactblog.reactblogimg}
      />
    
      <div className="">
        <p className={reactblog.timeline}> 작성일 : {x.comment.created.match(/\d{4}-\d{2}-\d{2}/)?.join('')}        
        </p>
        <h3 className={reactblog.reacttitle}>{x.comment.title.replace(/\(.*?\)/,'')}</h3>  
        <p className={reactblog.reactcontents}>
        {x.comment.body.replace(hangulno,'')}
        </p>
      </div>
    </article>
        </a>
        
    })}

        </div>
        </div>
    )
}