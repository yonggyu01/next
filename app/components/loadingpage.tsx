'use client'
import React from 'react'
import loadcss from './loadcss.module.scss'

export default function Loadingpage(){
    return (
        <div className={loadcss.wrap}>
            <div className={loadcss.box}>
                <img src="./103.gif"/>
            </div>
        </div>
    )
}