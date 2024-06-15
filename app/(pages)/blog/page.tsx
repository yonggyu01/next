import Image from "next/image";
import React from 'react'
import { blogdata } from "./fetchblogdata";
import blog from './blog.module.scss'
import { Bloglist } from "./bloglist";
import {Steemitdata,SteemitResult} from "@/app/model";
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
const Blog: React.FC=async ()=>{
  const dehydratedState = await preFetchdata();
  // const data :SteemitResult | void = await blogdata().catch(err=>console.log('data 없음'))
  return (
    <div className={blog.mainwrap}>
       <HydrationBoundary state={dehydratedState}>
     <Bloglist></Bloglist>
     </HydrationBoundary>
    </div>
  );
}
export default Blog