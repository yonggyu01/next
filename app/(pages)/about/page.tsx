import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import about from './about.module.scss'
import profile from '@/app/components/mainpage/profile/profile.module.scss'

export default async function Vschome(){
  
  return (
    <div className={about.mainwrap}>

      <div className={about.countnum}>
          <div className={about.flex}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> html</span>
            <span className={about.attrib}> lang</span>
            <span className={about.tagname}> =</span>
            <span className={about.attval}> "ko""</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> header</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> title</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
           <span className={`${about.text} ${about.mleft1}`}> 안녕하세요? 자기소개 페이지입니다.</span>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> /title</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> /header</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> body</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> h1</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
           <span className={`${about.text} ${about.mleft1}`}> 저를 소개할게요</span>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> /h1</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>

      <div className={about.countnum}>
           <span className={`${about.text} ${about.mleft1}`}> 프론트엔드 개발자 김용규입니다.</span>
      </div>
      <div className={about.countnum}>
           <span className={`${about.text} ${about.mleft1}`}> 이건 제 사진이에요.</span>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
          <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> img</span>
            <span className={about.attrib}> src</span>
            <span className={about.tagname}> =</span>
            <span className={about.attval}> "./내사진.png"<Image src="/yong.jpg" alt='svg' width={800} height={500} className={`${profile.headimg} ${about.mypic}`}></Image> </span>
           
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
      <div className={about.countnum}>
      <span className={`${about.text} ${about.mleft1}`}> 새롭게 배운 기술을 업무에 적용하여 좀 더 나은 서비스를 구축하는 것에 가장 큰 보람을 느낍니다</span>
      </div>
      <div className={about.countnum}>
      <span className={`${about.text} ${about.mleft1}`}> 기록의 중요성에 대해 알고 있습니다.  항상 블로그에 글을 작성합니다.</span>
      </div>


      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft}`}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> /body</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>
  
      <div className={about.countnum}>
          <div className={about.flex}>
            <span className={about.ltgt}> &lt; </span> 
            <span className={about.tagname}> /html</span>
            <span className={about.ltgt}> &gt; </span> 
          </div>
      </div>

    </div>
  );
}
