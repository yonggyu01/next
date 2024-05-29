import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import about from './contact.module.scss'
import Ter from './boardview'
import profile from '@/app/components/mainpage/profile/profile.module.scss'
import Clip from './clip'
export default async function Vschome(){
  const contactme ={
      email: "yonggyu01@naver.com",
      github: "https://github.com/yonggyu01",
      blog: "https://steemit.com/@yonggyu01/posts",
      phone: "010-2190-6008" 
  }

  return (
    <div className={about.mainwrap}>
      <h1 className={about.ctitle}> Contact Me</h1>
      <div className={about.countnum}>
          <div className={about.flex}>
                 <span className={about.attrib}> contact</span>      
                 <span className={about.ltgt}> &#123; </span>   
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={`${about.text} `}> email :  
            <Clip contactme={contactme}></Clip>
            </span>
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
      <span className={`${about.text} `}> github :    <a href={contactme.github}> <span className={about.tagname}> "{contactme.github}"</span></a> </span>
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={`${about.text} `}> blog :    <a href={contactme.blog}>  <span className={about.tagname}> "{contactme.blog}"</span></a> </span>
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={`${about.text} `}> phone :     <span className={about.tagname}> "{contactme.phone}"</span></span>
          </div>
      </div>
      <div className={`${about.countnum} ${about.mb}`}>
          <div className={about.flex}>
                 <span className={about.ltgt}> &#125; </span>   
          </div>
      </div>

    <h2 className={about.ctitle}>
     방명록 남기기
    </h2>
   <Ter></Ter>
    </div>
  );
}
