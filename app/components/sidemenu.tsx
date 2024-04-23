
import React from 'react'
import sbar from '../style/sidebar.module.scss'
import Link from 'next/link'
import { siteConfig } from '../config'
interface Ownprops{
    openside : boolean,
    setopenside: React.Dispatch<React.SetStateAction<boolean>>
}

export const Sidebar:React.FC<Ownprops> =({openside,setopenside})=>{

    return (
        <div className={`${sbar.sidewrap} ${openside&& sbar.openmenu}`}>
            <div className={sbar.left}>
                <Link href="/"> Main</Link>
                {siteConfig.navItems.map(item =><Link key={'key'+item.href} href={item.label}>{item.label}</Link> ) }

            </div>
            <div className={sbar.right}></div>
            <button className={sbar.xbtn} onClick={()=>{
                setopenside(!openside)
            }}> X </button>
        </div>
    )

}