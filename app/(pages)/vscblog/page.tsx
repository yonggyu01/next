import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import blog from './vscblog.module.scss'
import { Bloglist } from "../blog/bloglist";
import {Steemitdata,SteemitResult} from "@/app/model"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  DehydratedState,
  useQuery,
} from '@tanstack/react-query';
async function preFetchdata() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blogdatalist'],
    queryFn: blogdata,
  });
  return  dehydrate(queryClient)  
}
export default async function Vscblog(){
  const dehydratedState = await preFetchdata();
  // const data :SteemitResult = await blogdata()
  // console.log(data)
  return (
    <div className={blog.mainwrap}>
       <HydrationBoundary state={dehydratedState}>
     <Bloglist></Bloglist>
     </HydrationBoundary>
    </div>
  );
}
