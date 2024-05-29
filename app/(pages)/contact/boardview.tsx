"use client"
import React from 'react'
import board from './contact.module.scss'
import Inp from './boardwrite'
const Boardview :React.FC = ()=>{
    return (
        <div className={board.teminal}>
            <div>
                <h2 className={board.tti}>TERMINAL</h2>
                <div className={board.blank}></div>
                <details open>
                    <summary>
                        {/* 도움말 */}
                    </summary>
                    <span className={`${board.ltgt} ${board.ml}` }> ID : "본인의 아이디" 입력하세요 </span>
                <br/>   
                <span className={`${board.ltgt} ${board.ml}` }> Text : "방명록 내용" 입력하세요 </span>

                </details>
           
            </div>
            <Inp></Inp>
        </div>
    )
}
export default Boardview