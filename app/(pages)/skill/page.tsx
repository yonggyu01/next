import Image from "next/image";
import React from 'react'
import skill from './skill.module.scss'


export default async function Skillpage(){
 const skilllist = [
  {
    category :'lang',
    title : "HTML",
    content : "시맨틱 요소를 사용하고 웹 표준과 웹 접근성을 고려합니다",
    src : <img src="/html-5-svgrepo-com.svg" alt="svg" className={skill.img}/>,
  },
  {
    category :'lang',
    title : "CSS",
    content : "flex, grid 등을 사용하여 반응형 웹 디자인 작업가능",
    src : <img src="/css-3-svgrepo-com.svg" alt="svg" className={skill.img}/>,
  },
  {
    category :'lang',
    title : "JavaScript",
    content : "Es6+ 문법을 이해하고 활용합니다.", 
    src :  <img src="/javascript-logo-svgrepo-com.svg" alt="svg" className={skill.img}/>,
  },
  {
    category :'lang',
    title : "TypeScript",
    content : "정적타입의 언어인 TS의 장점을 이해하고 사용합니다.", 
    src :  <img src="/typescript.svg" alt="svg"  className={skill.img}/>,
  },
  {
    category :'frame',
    title : "Vue",
    content : "Options api / Composition api 문법을 이해하고 사용합니다.", 
    src : <img src="/vue-svgrepo-com.svg" alt="vue" className={skill.img}/>,
  },
  {
    category :'frame',
    title : "React",
    content : "JSX 문법을 사용하여 웹 페이지 제작가능, 다양한 훅 사용가능. ", 
    src : <img src="/react-svgrepo-com.svg" alt="vue" className={skill.img}/>
    ,
  },
  {
    category :'frame',
    title : "SCSS",
    content : "변수/함수/mixin 등을 활용하여 재사용가능한 css 작성 ", 
    src :  <img src="/sass-1.svg" alt="svg" className={skill.img}/>,
  },

  {
    category :'frame',
    title : "Axios",
    content : "비동기작업에 대한 개념을 이해하고 사용합니다. ", 
    src :  <img src="/axios-ar21.svg" alt="svg" className={skill.img}/>,
  },
  {
    category :'tools',
    title : "VSC",
    content : "많은 사용자가 이용중인 IDE인 vs code를 선택하여 사용하고 있습니다.", 
    src : <img src="/visual-studio-code-1.svg" alt="svg" className={skill.img}/>,
  },
  {
    category :'tools',
    title : "Git",
    content : " “프로젝트의 버전관리와 팀간의 원활한 협업을 위해 사용합니다.", 
    src : <img src="/git-icon.svg" alt="svg" className={skill.img}/>,
  },
 ]
const lang = skilllist.filter(el =>  el.category=="lang")
const frame = skilllist.filter(el =>  el.category=="frame")
const tools = skilllist.filter(el =>  el.category=="tools")

  return (
    <div className={skill.layout}>
      <div className={skill.scrollh}> 
        <h2 className={skill.title}>기술스택</h2>
        <h3 className={skill.subtitle}>Language</h3>
        <ul className={skill.flex}>
          {lang.map(el => <li key={'skill'+el.title}>
            {el.src}
            <h3 className={skill.mtitle}>{el.title}</h3>
            <p className={skill.mcontent}>{el.content}</p>
          </li>)}
        </ul>

        <h3 className={skill.subtitle}>Framework / Library</h3>
        <ul className={skill.flex}>
          {frame.map(el => <li key={'skill'+el.title}>
            {el.src}
            <h3 className={skill.mtitle}>{el.title}</h3>
            <p className={skill.mcontent}>{el.content}</p>
          </li>)}
        </ul>

        <h3 className={skill.subtitle}>Tools</h3>
        <ul className={skill.flex}>
          {tools.map(el => <li key={'skill'+el.title}>
            {el.src}
            <h3 className={skill.mtitle}>{el.title}</h3>
            <p className={skill.mcontent}>{el.content}</p>
          </li>)}
        </ul>
      </div>
      
    </div>
  );
}
