import React from 'react'
import side from './side.module.scss'
import {sidebarlist} from '@/app/model'
const Side :React.FC = ()=>{
    const list :sidebarlist[]= [
        {content : 'intro page입니다.',
            title: 'filter_none'
        },
        {content : 'About me.',
        title: 'account_circle'
        },
        {content : '테마가 변경됩니다.',
        title: 'toggle_on'
        },
        {content : '포트폴리오 소개페이지 입니다.',
        title: 'iframe'
        },
        {content : 'skill 소개페이지입니다.',
        title: 'stacks'
        },
        {content : 'blog 페이지입니다.',
        title: 'feed'
        },
        {content : '저에게 연락하기',
        title: 'contact_mail'
        }
    ]
    return (
    <div className={side.wrap}>
    <ul className={side.flexbox}>
        {list.map(el=> <li className={side.relative}>
            <a href="#none">
                <span className='material-symbols-outlined'>{el.title}</span>
            </a>
            <p className={side.popup}>{el.content}</p>
        </li>)}
       
    </ul>
    </div>
    )
}
export default Side