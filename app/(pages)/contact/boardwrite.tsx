"use client"
import React from 'react'
import board from './contact.module.scss'

const Boardwrite :React.FC =()=>{
    return (
    <div className={board.inputwrap}>
        <input type="text" placeholder='textinput' />
    </div>
    )
}
export default Boardwrite