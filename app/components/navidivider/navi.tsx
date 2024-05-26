"use client"

import Link from 'next/link'
import React from 'react'
import { siteConfig } from '../../config'
import navi from '../../style/navi.module.scss'
import { useAppDispatch,useAppSelector } from '@/app/store/hook';
import {Sidebar} from '../sidemenu'
import { Themestore } from '@/app/store/module/themestore'
export const Navi:React.FC=() => {
const [openside, setopenside] = React.useState<boolean>(false)
    // 버거버튼 여기에 만들어야할듯
    const dispatch = useAppDispatch()
    return (
        <>
        <nav className={navi.navig}>
            <Link href="javascript:void(0);" className={navi.bugerbtn} onClick={()=>{
                setopenside(!openside)
            }}> 
                <span></span>
                <span></span>
                <span></span>
            </Link>
            <div className={navi.bugertitle}><h1>블로그와 인터뷰 정리</h1></div>
            <ul className={navi.ulflex}>
                {siteConfig.navItems.map(item=>(
                <li key={item.label}>
                    <Link href={item.href} onClick={()=>{
                        if(item.label === "Toggle_Theme"){
                            console.log('테마변경')
                            dispatch(Themestore.actions.changetheme('vsc'))
                        }
                    }}>{item.label} </Link>
                </li> 
                ))
                }
            </ul>
        </nav>
        <div className={navi.sidebar}>
            <Sidebar openside={openside} setopenside={setopenside}></Sidebar>
        </div>
        </>
    )
}