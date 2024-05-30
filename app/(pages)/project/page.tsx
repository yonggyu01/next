import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import proj from './proj.module.scss'
import profile from '@/app/components/mainpage/profile/profile.module.scss'

export default async function Project(){
  const list = [
    {
      title : "VSCode theme blog",
      skill : ["react", 'typescript',"redux-toolkit", "scss", "react-persist","next.js"],
      contents : '블로그에 카테고리 기능을 추가하여 제작',
      point : '반응형 웹페이지, 검색엔진최적화(SEO)를  위해 메타 태그 작성, 구글 서치 콘솔 / 네이버 웹마스터 등에 사이트맵과 RSS을 제출하여 페이지 색인 등록',
      git : 'https://github.com/yonggyu01/next_myblog',
      visit : 'https://next-myblog-5rdu.vercel.app/',
      deploy : 'Vercel',
      src : '/blog.jpg'
    },
    {
      title : "Project : Ari",
      skill : ["react", "zustand", "tailwind css", "axios","Daisy Ui"],
      contents : '리엑트를 활용하여 제작한 포트폴리오 모아보기 페이지입니다.',
      point : '장바구니와 회원가입등을 제어하기 위해 Admin페이지가 존재합니다.',
      git : 'https://github.com/yonggyu01/react-ari',
      visit : 'http://ec2-13-209-26-80.ap-northeast-2.compute.amazonaws.com/',
      deploy : 'AWS EC2',
      src : '/arifanpage.PNG'
    },
    {
      title : "육아앱",
      skill : ["Vue", "Vuex", "tailwind css", "css"],
      contents : 'Vue의 composition 문법을 사용하여 제작한 육아앱 홈페이지입니다.',
      point : 'node 서버를 통해 todo리스트와 장바구니를 저장합니다.',
      git : 'https://github.com/yonggyu01/mybabyari',
      visit : 'https://engproject-ba2f9.firebaseapp.com/',
      deploy : 'Firebase hosting' ,
      src : '/vue.PNG'
    },
    {
      title : "CGV",
      skill : ["HTML", "CSS", "Javascript"],
      contents : 'HTML과 CSS javascript를 학습하며 만들어본 첫 홈페이지',
      point : '회원가입 기능을 위해 localstorage를 사용함',
      git : 'https://github.com/yonggyu01/finalcgv',
      visit : 'https://yonggyu01.github.io/finalcgv/',
      deploy : 'Github pages' ,
      src : '/cgv2.PNG'
    },
    {
      title : "Windows 95 Theme site",
      skill : ["HTML", "CSS", "Javascript"],
      contents : 'html, css, javascript를  활용해 SPA구조의 홈페이지를 제작',
      point : '드래그 앤 드롭 및 그림판, 터미널 화면 등등 windows 운영체제의 다양한 기능을 구현',
      git : 'https://github.com/yonggyu01/windowProject',
      visit : 'https://mywindow95.netlify.app/',
      deploy : 'Netlify' ,
      src : '/윈도1.PNG'
    },
  ]
  return (
    <section className={proj.mainwrap}>
      <h1 className={proj.title}>Portfolio</h1>
      <div className={proj.list}>   
      {list.map(el => <div className={proj.wrapbox} key={'project'+el.title}>
        <img src={el.src} className={proj.img}/>
        <div className={proj.padding}>
        <h2 className={proj.subtitle}>{el.title}</h2>
        <p className={proj.contents}>{el.contents}</p>
        <p className={proj.point}>{el.point}</p>
        <h3 className={proj.skilllist}>사용기술</h3>
        <p className={proj.skill}>{el.skill.map(ele => <span key={'skill'+ele}>#{ele}</span>)}</p>
        <div className={proj.btnflex}>
        <a href={el.git} className={proj.git}>Github</a>
        <a href={el.visit} className={proj.visit}>Visit</a>
        </div>
        </div>
      </div>)}
      </div>
    </section>
  );
}
