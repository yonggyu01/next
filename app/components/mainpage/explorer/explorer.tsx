"use client"
import React from 'react'
import ex from './explorer.module.scss'
import {useAppDispatch} from '@/app/store/hook';
import { Themestore } from '@/app/store/module/themestore';
import {filenames} from '@/app/model'
export const filelist:filenames[] = [
    {
        title: "Home.jsx",
        src :<svg className={ex.svg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.7 12c0-1.4-1.3-2.7-3.4-3.5V8c.3-2.1-.2-3.6-1.3-4.2-1.3-.7-3-.2-4.8 1.2-1.8-1.4-3.5-2-4.7-1.2C6.4 4.4 5.9 5.9 6 8v.5c-2 .8-3.4 2-3.4 3.5 0 1.4 1.4 2.7 3.5 3.5L6 16c-.2 2.1.3 3.6 1.4 4.2.3.2.8.3 1.2.3a6 6 0 0 0 3.5-1.5 6 6 0 0 0 3.5 1.5c.5 0 .9 0 1.3-.3 1-.6 1.6-2.1 1.3-4.2v-.5c2-.8 3.4-2 3.4-3.5Zm-6-7.5.8.1c.7.5 1 1.6.9 3.3l-.1.3c-.8-.3-1.7-.4-2.6-.5-.5-.7-1-1.4-1.7-2 .7-.7 1.7-1.1 2.7-1.2Zm-8 8.7.6 1 .6 1c-.5 0-1-.2-1.6-.4l.5-1.6Zm-.4-4L9 8.8l-.6 1-.5 1-.5-1.6Zm1 2.8a19.3 19.3 0 0 1 2-3.4 19.9 19.9 0 0 1 3.9 0 19.6 19.6 0 0 1 2 3.4 19.3 19.3 0 0 1-2 3.4 20 20 0 0 1-4 0A20.2 20.2 0 0 1 8.4 12Zm7.8 2.3.5-1 .5 1.5-1.6.4.6-1Zm.5-3.5-.5-1-.6-1c.6 0 1 .2 1.6.4l-.5 1.6Zm-4.4-4.5 1.1 1.2a20.9 20.9 0 0 0-2.2 0l1.1-1.2ZM8 4.6c.2 0 .5-.2.7-.1 1 0 2 .5 2.8 1.2-.7.6-1.3 1.3-1.8 2a8 8 0 0 0-2.6.5v-.3c-.2-1.7.1-2.8.9-3.3ZM3.7 12c0-.9 1-1.8 2.7-2.5l.8 2.5-.8 2.5C4.7 13.8 3.7 13 3.7 12ZM8 19.4c-.8-.5-1-1.6-1-3.3l.1-.3c.9.3 1.7.4 2.6.5.5.7 1.1 1.4 1.8 2-1.5 1.1-2.8 1.5-3.5 1Zm3-3a20.3 20.3 0 0 0 2.4 0l-1.2 1.3-1.1-1.2Zm5.5 3c-.8.4-2.1 0-3.5-1l1.7-2c.9-.2 1.8-.3 2.6-.6v.3c.2 1.7-.1 2.8-.8 3.3Zm1.6-4.9c-.2-.9-.5-1.7-.9-2.5.4-.8.7-1.6.9-2.5 1.6.7 2.6 1.6 2.6 2.5 0 .9-1 1.8-2.6 2.5Z"/>
        <path d="M12.2 13.8a1.8 1.8 0 1 0-1.8-1.8 1.8 1.8 0 0 0 1.8 1.8Z"/>
      </svg>,
      href : '/vschome'
    },
    {
        title:"About.html",
        src : <svg className={ex.svg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm14 6H9l.2 2H17l-.6 6.6-4.2 1.4-4.3-1.4-.3-3h2l.2 1.4 2.4.8 2.3-.7.3-3H7.4L7 6h10.4L17 8Z"/>
          </svg>,
          href : '/about'
    },
    {
        title:'Blog.ts',
        src : <img src="/typescript.svg" alt="svg" className={ex.svg}/>
        ,href : '/vscblog'
    },
    {
        title:"Project.js",
        src : <img src="/javascript-logo-svgrepo-com.svg" alt="svg" className={ex.svg}/>
        ,href : '/project'    
    }
    ,
    {
        title:"contact.scss",
        src :  <img src="/sass-1.svg" alt="svg" className={ex.svg} />
        ,href : '/contact'
    },
    {
        title:"skill-inventory.css",
        src :  <svg className={ex.svg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="m3 2 1.6 17.8L12 22l7.5-2.2L21 2H3Zm13.3 14.7L12 18l-4.3-1.2-.3-3.1h2.1l.2 1.5 2.3.6 2.3-.6.3-3H7.3l-.2-2h7.7l.1-2H7l-.2-2h10.6l-1 10.6Z"/>
     </svg>,
     href : '/skill'
    }
    ]

const Explorer : React.FC = () =>{
   const dispatch = useAppDispatch()
    return (
        <div className={ex.full}>
            <h2 className={ex.top}>EXPLORER</h2>
            <details open>
                <summary>김용규 VSC Project</summary>
                <ul className={ex.flexbox}>
                    {filelist.map(el=> <li key={'list'+el.title} >
                        {el.src}
                        <a href={el.href} className={ex.font} onClick={()=>{
                            dispatch(Themestore.actions.setselecticon(`${el.href.replace(/\//,'')}`))
                        }}>{el.title}</a>
                        <div className={ex.bggray}></div>
                    </li>)}
                </ul>
            </details>
        </div>
    )
}
export default Explorer