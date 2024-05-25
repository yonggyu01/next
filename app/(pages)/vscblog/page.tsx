import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import blog from './vscblog.module.scss'
import { Bloglist } from "../blog/bloglist";
import {Steemitdata,SteemitResult} from "@/app/model"

export default async function Vscblog(){
  const data :SteemitResult = await blogdata()
  console.log(data)
  return (
    <div className={blog.mainwrap}>
     <Bloglist data={data}></Bloglist>
    </div>
  );
}
