import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import about from './contact.module.scss'
import Ter from './boardview'
import profile from '@/app/components/mainpage/profile/profile.module.scss'
import Clip from './clip'
import {fetchcontact} from './fetchgetdata'
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
async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['contactdata'],
    queryFn: fetchcontact,
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
 const Vschome:React.FC<ownprops> =async ({dehydratedState})=>{
  const contactme ={
      email: "yonggyu01@naver.com",
      github: "https://github.com/yonggyu01",
      blog: "https://steemit.com/@yonggyu01/posts",
      phone: "010-2190-6008" 
  }

  return (
    <div className={about.mainwrap}>
      <div className={about.gridwrap}>
      <h1 className={about.ctitle}> Contact Me</h1>
      <div className={about.countnum}>
          <div className={about.flex}>
                 <span className={about.attrib}> contact</span>      
                 <span className={about.ltgt}> &#123; </span>   
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={`${about.text} `}> email :  
            <Clip contactme={contactme}></Clip>
            </span>
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
      <span className={`${about.text} `}> github :    <a href={contactme.github}> <span className={about.tagname}> "{contactme.github}"</span></a> </span>
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={`${about.text} `}> blog :    <a href={contactme.blog}>  <span className={about.tagname}> "{contactme.blog}"</span></a> </span>
          </div>
      </div>
      <div className={about.countnum}>
          <div className={`${about.flex} ${about.mleft1}`}>
            <span className={`${about.text} `}> phone :     <span className={about.tagname}> "{contactme.phone}"</span></span>
          </div>
      </div>
      <div className={`${about.countnum} ${about.mb}`}>
          <div className={about.flex}>
                 <span className={about.ltgt}> &#125; </span>   
          </div>
      </div>
      </div>
     
<div className={about.gridwrap1}>
<h2 className={about.stitle}>
     방명록 남기기
    </h2>
    <HydrationBoundary state={dehydratedState}>
   <Ter></Ter>
   </HydrationBoundary>
    </div>
</div>
   
  );
}

export default Vschome