"use client"
import React from 'react'
import board from './contact.module.scss'
import Inp from './boardwrite'
import {Ifetch,noticeboard} from '../../model'
import axios, { AxiosResponse } from 'axios'
import {fetchcontact} from './fetchgetdata'
import {
   useQuery,
} from '@tanstack/react-query';
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
    async function addboard (obj:noticeboard){
        try{
                       const add:AxiosResponse = await axios.post('/api/board',obj)
            const result = add.data
            setrender(true)
             console.log(result)  
            //  return result

        }catch(err){
            console.log('server')
        }
    }

    const {data,isSuccess} = useQuery({
        queryKey: ['contactdata'],
        queryFn:fetchcontact
    })
    React.useEffect(()=>{
        setrender(false)
        // getdata()
    },[render,isSuccess])

    return (
        <div className={board.teminal}>
            <div>
                <h2 className={board.tti}>TERMINAL</h2>
                <div className={board.blank}></div>
                <details>
                    <summary>
                        {/* 도움말 */}
                    </summary>
                    <span className={`${board.ltgt} ${board.ml}` }> ID : "본인의 아이디" 입력하세요 </span>
                <br/>   
                <span className={`${board.ltgt} ${board.ml}` }> Text : "방명록 내용" 입력하세요 </span>
                </details>
                {
                 data && data.map((el:noticeboard)=> <div className={board.blist} key={'contact'+el.create}>
                    <span className={`${board.text} ${board.eclip}`}>{el.userid}</span>
                    <span className={`${board.attrib} ${board.eclip}`}>{el.content}</span>
                    <span className={board.text}>{el.create?.replace(/(\d{1,2}월\d{1,2}일).*/, "$1")}</span>
                 </div>)
                }
           
            </div>
            <Inp addboard={addboard}></Inp>
        </div>
    )
}
export default Boardview