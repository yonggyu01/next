"use client"
import React from 'react'
import {filelist} from '../explorer/explorer' 
import '../explorer/explorer.module.scss';
import mh from './mh.module.scss'
import {Themestore} from '@/app/store/module/themestore';
import { useAppDispatch,useAppSelector } from '@/app/store/hook';
import './mh.scss'

const Mainheader:React.FC = ()=>{
    const dispatch = useAppDispatch()
   const select = useAppSelector(state=>state.persistedReducer.themestore.selecticon)
    // console.log('/'+select,'store값',filelist[0].href.replace(/\//,'') )

   return (
        <ul className={mh.flex}>
            {filelist.map(el => <li key={'filelist'+el.title} className={`${mh.row}  ${el.href== ('/'+select) ? select+'layout' : ''}`}>
                {el.src}
                <a href={el.href} onClick={()=>{
                    dispatch(Themestore.actions.setselecticon(`${el.href.replace(/\//,'')}`))
                }}>{el.title}</a>
            </li>)}
        </ul>
    )
}
export default Mainheader