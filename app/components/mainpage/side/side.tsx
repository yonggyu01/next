"use client"

import React, { useEffect } from 'react'
import side from './side.module.scss'
import {sidebarlist} from '@/app/model'
import {useAppDispatch} from '@/app/store/hook'
import {Themestore} from '@/app/store/module/themestore'
const Side :React.FC = ()=>{
       const [render,setrender] = React.useState<boolean>(false)
       const dispatch = useAppDispatch()
       React.useEffect(()=>{
        setrender(false)
       },[render])
       const list= React.useRef<sidebarlist[]>([
        {content : 'intro page입니다.',
            title: 'filter_none',
            href: '/vschome'
        },
        {content : 'About me.',
        title: 'account_circle',
        href: '/about'
        },
        {content : '테마가 변경됩니다.',
        title: 'toggle_on',
        toggle : true,
        action(value:boolean) {
            this.toggle = value
            if(this.toggle){
                this.title = 'toggle_on'
            }else{
                this.title = 'toggle_off'
            }
            setrender(true)
        },
        href: ''
        },
        {content : '포트폴리오 소개',
        title: 'iframe',
        href: '/project'
        },
        {content : '기술스택 ',
        title: 'stacks',
        href: '/skill'
        },
        {content : 'blog 페이지',
        title: 'feed',
        href: '/vscblog'
        },
        {content : '저에게 연락하기',
        title: 'contact_mail',
        href: '/contact'
        }
    ])
    return (
    <div className={side.wrap}>
    <ul className={side.flexbox}>
        {list.current.map(el=> <li className={side.relative} key={'side'+el.title}>
            <a href={el.href? el.href : '#none'} onClick={()=>{
                if(el?.action){
                    el.toggle? dispatch(Themestore.actions.changecolortheme('dark')) : dispatch(Themestore.actions.changecolortheme('light'))
                    el.action(!el.toggle)
                }
                if(el.href){
                    dispatch(Themestore.actions.setselecticon(`${el.href.replace(/\//,'')}`))
                }

                
            }}>
                <span className='material-symbols-outlined'>{el.title}</span>
            </a>
            <p className={side.popup}>{el.content}</p>
        </li>)}
       
    </ul>
    </div>
    )
}
export default Side