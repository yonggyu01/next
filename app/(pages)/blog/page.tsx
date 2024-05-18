import Image from "next/image";
import React from 'react'

import blog from './blog.module.scss'
import { Bloglist } from "./bloglist";
import {Steemitdata,SteemitResult} from "../../model"
export const blogdata = async () => {
  let data = await fetch('https://api.steemit.com', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     jsonrpc: '2.0',
     method: 'condenser_api.get_blog',
     params: ['yonggyu01', 0, 150],  
     id: '1',}),
  // cache: 'no-store'
   })
   let result = await data.json()
   return result
 }

export default async function Blog(){
  const data :SteemitResult = await blogdata()
  console.log(data)
  return (
    <div className={blog.mainwrap}>
     <Bloglist data={data}></Bloglist>
    </div>
  );
}
