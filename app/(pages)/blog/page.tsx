import Image from "next/image";
import React from 'react'
import { blogdata } from "./fetchblogdata";
import blog from './blog.module.scss'
import { Bloglist } from "./bloglist";
import {Steemitdata,SteemitResult} from "@/app/model"

export default async function Blog(){
  const data :SteemitResult | void = await blogdata().catch(err=>console.log('data 없음'))
  console.log(data)
  return (
    <div className={blog.mainwrap}>
     {data? <Bloglist data={data}></Bloglist> : <></>}
    </div>
  );
}
