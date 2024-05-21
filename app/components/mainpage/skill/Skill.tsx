import React from 'react'
import skill from './skill.module.scss'
export const Skill:React.FC = ()=>{
    return (
        <div className={skill.fullwrap}>
            <h2>기술 스택</h2>
            <span className={skill.line}></span>
        </div>
    )
} 