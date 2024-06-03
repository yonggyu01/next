"use client"
import React, { useEffect } from 'react'
import {Steemitdata,SteemitResult, body} from "../../model"
import reactblog from './blog.module.scss'
import { useAppDispatch,useAppSelector } from '../../store/hook';
import {Mystore} from "@/app/store/module/mystore";
interface Ownprops {
    data : Steemitdata[]  
    title : string
    check : string
}
export const Reactpage :React.FC<Ownprops> = ({data,title,check}) => {
    const [render, setrender] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()
    React.useEffect(()=>{
      if(moveli.current.length >= 3 ){
        setrender(true)
      }else {
        setrender(false)
      }

    },[render])
    const imgsrc = /https.+[$jpg]/i
    const hangulno = /[^ ㄱ-ㅣ가-힣]/gm
    const movecontainer = React.useRef<HTMLDivElement>(null)
    const moveli  = React.useRef<HTMLAnchorElement[]>([])  
    let liindex= React.useRef<number>(0)
    function movingscroll(action: string){
      if(action === 'left' && liindex.current <= moveli.current.length-3 && liindex.current >0){
        --liindex.current 
      }else if(action === 'right' && liindex.current < moveli.current.length-3 && liindex.current >=0 ){++liindex.current}
      // console.log(liindex, 'idx',moveli.current[liindex])
      console.log(moveli.current[0].getBoundingClientRect().width,'사이즈')
      moveli.current[liindex.current]?.scrollIntoView({
         behavior: "smooth", 
         block: "nearest", 
         inline: "start" 
        })
    }
    let mwidth = 0;
    // console.log( movecontainer.current)
    function movestyle(action:string):void{
      if (!movecontainer.current) return; // movecontainer가 null이 아닌지 확인
      let totallength = moveli.current.length;
      let onewidth = moveli.current[0].getBoundingClientRect().width + 24
      let totalwidth = (totallength * onewidth) - (onewidth*3) - 24
      // gap 24px임  마지막에는 갭이 없으니  -24 필요 마지막 3칸정도는 옆으로 이동할 필요가 없음
      // 마지막 3개의 값만 더 빼주자      
      if(action=='left' && mwidth <= -onewidth ){
        mwidth = mwidth + onewidth
        movecontainer.current.style.transform=`translateX(${mwidth}px)`
      }else if(action=='right' && mwidth > -totalwidth ){
        mwidth = mwidth - onewidth
        movecontainer.current.style.transform=`translateX(${mwidth}px)`
      }
    }

    function pushdisp(txt:string) :void {
      switch(txt){
        case 'react' : 
        dispatch(Mystore.actions.addreact(data))
        return;
        case 'skill' :
        dispatch(Mystore.actions.addskill(data))
        return;
        case 'cs':
        dispatch(Mystore.actions.addcs(data))
        return;
        case 'next':
        dispatch(Mystore.actions.addnext(data))
        return;
        case 'vue' : 
        dispatch(Mystore.actions.addvue(data))
        return;
        case 'review' : 
        dispatch(Mystore.actions.addreview(data))
        return;
      }
    }  

    // console.log(typeof moveli.current.length, `${title} title`)
    return (
        <div className={reactblog.leftmargin}>
            {render ?  <div className={reactblog.listbtn}> 
        <button className={reactblog.listbtnLeft} onClick={()=>{
          movingscroll('left')
          // movestyle('left')
        }}>&lt;</button>
        <button className={reactblog.listbtnRight} onClick={()=>{
          movingscroll('right')
          // movestyle('right')
        }}>&gt;</button>
        </div> : <></>}
        <h1 className={reactblog.retitle}> {title}</h1>
        <div className={reactblog.overflowhidden}>
        <div className={reactblog.reactflexbox} ref={movecontainer}>
     
{data && data.map((x:Steemitdata,idx:number)=>{ return <a key={x.comment.title+x.comment.created} 
      ref={item =>{ // 각각의 a 태그가 생성될 때마다 moveli 배열에 추가
                        if (item && !moveli.current.includes(item)) {
                            moveli.current.push(item);
                            setrender(true)
                        }}} 
                        onClick={()=>{  
                          pushdisp(check)
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
        </div>
    )
}