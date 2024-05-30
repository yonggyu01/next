"use client"
import React from 'react'
import board from './contact.module.scss'
import Inp from './boardwrite'
import {Ifetch,noticeboard} from '../../model'
import axios, { AxiosResponse } from 'axios'
const Boardview :React.FC = ()=>{
    const [list, setlist] = React.useState<noticeboard[]>([])
    const [render,setrender]= React.useState<Boolean>(false)
    async function getdata() {
        try{
        const get:AxiosResponse = await axios.get('/api/board')
        const result = get.data
        setlist(result)
        } catch (err){
            console.log('데이터 가져오기 오류')
        }
    }
    React.useEffect(()=>{
        setrender(false)
        getdata()
    },[render])

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
                {
                 list && list.map(el=> <div className={board.blist}>
                    <span className={board.text}>{el.userid}</span>
                    <span className={board.attrib}>{el.content}</span>
                 </div>)
                }
           
            </div>
            <Inp></Inp>
        </div>
    )
}
export default Boardview