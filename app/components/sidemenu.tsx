'use client'
import React from 'react'
import sbar from '../style/sidebar.module.scss'
import Link from 'next/link'
import { siteConfig } from '../config'
import { useAppDispatch } from '../store/hook'
import {Themestore} from '../store/module/themestore'
interface Ownprops{
    openside : boolean,
    setopenside: React.Dispatch<React.SetStateAction<boolean>>
}
export const Sidebar:React.FC<Ownprops> =({openside,setopenside})=>{
    const dispatch = useAppDispatch()
    return (
        <div className={`${sbar.sidewrap} ${openside&& sbar.openmenu}`}>
            <div className={sbar.left}>
                <Link href="/"> Main</Link>
                {siteConfig.navItems.map(item =><Link key={'key'+item.href} href={item.label}
                onClick={(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
                    if(item.label==='Toggle_Theme'){
                        e.preventDefault()
                        setopenside(!openside)
                        dispatch(Themestore.actions.changetheme('vsc'))
                    }
                }}
                >{item.label}</Link> ) }
            </div>
            <div className={sbar.right}></div>
            <button className={sbar.xbtn} onClick={()=>{
                setopenside(!openside)
            }}> X </button>
        </div>
    )

}