"use client"
import React from "react";
import about from './contact.module.scss'
interface ownporps {
    contactme :{
        email: string,
        github:  string,
        blog:  string,
        phone:  string 
    }
}
const Clip :React.FC<ownporps> = ({contactme})=>{
    return ( <a href="" onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>)=>{
        e.preventDefault();
         if (navigator.clipboard && window.isSecureContext) {
           // clipboard API 사용
           navigator.clipboard.writeText(contactme.email).then(() => {
             alert('주소가 클립보드에 복사되었습니다!');
           }, (err) => {
             console.error('클립보드 복사 실패:', err);
           });
     }}}> <span className={about.tagname}> "{contactme.email}"</span> </a>)
}

export default Clip