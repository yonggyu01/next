import React from 'react'
import home from './homeview.module.scss'
import Mainheader from '../mainheader/mainheader'
const Homeview :React.FC = ()=>{
    return (
        <div className={home.full}>
        <div className={home.bgc}>
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={home.img}><defs></defs>
            <path d="m218.62 29.953-105.41 96.92L54.301 82.47 29.955 96.64l58.068 53.359-58.068 53.359 24.346 14.212 58.909-44.402 105.41 96.878 51.424-24.976V54.93zm0 63.744v112.6l-74.719-56.302z" stroke-width="17.15"></path></svg>
            <h1>Hello Yonggyu's Blog</h1>
            <h2> I'm Frontend Developer</h2>
            <div className={home.btns}>
                <button> Go Blog </button>
                <button> View Work </button>
                <button> Contact Me </button>
            </div>
        </div>
        </div>
    )
}
export default Homeview