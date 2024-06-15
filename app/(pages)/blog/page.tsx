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
interface ownprops{
    dehydratedState: DehydratedState;
 
}
export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['blogdatalist'],
    queryFn: blogdata,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
const Blog: React.FC<ownprops>= ({dehydratedState })=>{
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