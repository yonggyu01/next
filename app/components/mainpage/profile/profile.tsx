
import React from 'react'
import Image from "next/image";
import profile from './profile.module.scss'
export const Profile:React.FC = ()=>{
 


  
    return (
       
          
        <div className={profile.wrapbox}>
            <Image src="/yong.jpg" alt='svg' width={800} height={500} className={profile.headimg}></Image>
            <h1 className={profile.profiletitle}>안녕하세요 <br/>블로그와 기술면접을 정리할거에요</h1>
        </div>
     
    )
}

