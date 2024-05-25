
import React from 'react'
import headerbar from './headerbar.module.scss'
import { useAppDispatch,useAppSelector } from '@/app/store/hook';
import {Themestore} from "@/app/store/module/themestore";;
 const Headerbar:React.FC = ()=>{
    const dispatch = useAppDispatch()
    const terminal = useAppSelector(state => state.persistedReducer.themestore.Terminal)
    const headerlist:string[] =["File","Edit",'Selection','View','Go','Terminal','Help']
    return (
        <div className={headerbar.height}>
        <div className={headerbar.headerline}>
            <ul className={headerbar.flexbar}>
                <li className={headerbar.topma}><img className={headerbar.appicon} src="https://images.velog.io/images/rememberme_jhk/post/38e6ab0a-58a9-4477-bec4-a62ae20dda4a/vscode-logo.png"/></li>
                {headerlist.map(el=><li className={headerbar.topma} key={'key'+el}>
                    <a href='#none' className={headerbar.linkcolor} 
                        onClick={()=>{
                            if(el==='Terminal'){
                                dispatch(Themestore.actions.setTerminal(!terminal))
                            }
                        }}
                    >
                        {el}
                    </a>
                </li>
            )}
            </ul>
            <div className={headerbar.title}>
                <h1>김용규 VSC Project</h1>
            </div>
            <div className={headerbar.titleright}>
                <a href='#none' onClick={()=>{
                    dispatch(Themestore.actions.changetheme('blog'))
                    document.body.setAttribute('data-theme','light')
                }}> X </a>
            </div>
        </div>
        </div>
    )
}


export default Headerbar