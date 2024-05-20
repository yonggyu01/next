'use client'
import React from 'react'
import loadcss from './loadcss.module.scss'

export default function Loadingpage(){
    return (
        <div className={loadcss.wrap}>
            <div className={loadcss.box}>
                <p>loading 중입니다.</p>
            </div>
        </div>
    )
}