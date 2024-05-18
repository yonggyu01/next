import Image from "next/image";
import React from 'react'
import { blogdata } from "./fetchblogdata";
import blog from './blog.module.scss'
import { Bloglist } from "./bloglist";
import {Steemitdata,SteemitResult} from "@/app/model"

export default async function Blog(){
  const data :SteemitResult = await blogdata()
  console.log(data)
  return (
    <div className={blog.mainwrap}>
     <Bloglist data={data}></Bloglist>
    </div>
  );
}
