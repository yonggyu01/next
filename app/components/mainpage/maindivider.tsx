"use client"
import React from 'react'
import Side from "../../components/mainpage/side/side";
import Explorer from "../../components/mainpage/explorer/explorer";
import { useAppDispatch,useAppSelector } from '@/app/store/hook';
import main from '../../style/mainpage.module.scss'
import Mainheader from '@/app/components/mainpage/mainheader/mainheader'
import Loadingpage from "@/app/components/loadingpage";
import { Suspense } from 'react'
type MaindividerProps = React.PropsWithChildren<{}>;

const Maindivider :React.FC<MaindividerProps> = ({ children })=>{
    const selector = useAppSelector(state=> state.persistedReducer.themestore.themestate)
    return (
        <div className={`${selector=='vsc'? main.gridwrap : main.one}`}>
        {selector == 'vsc'? <Side></Side> : <></>
        }
        {selector == 'vsc'? <Explorer/> : <></>
        }
          
        <div>
        {selector == 'vsc'? <Mainheader/> : <></>
        }
          <Suspense fallback={<Loadingpage></Loadingpage>}>
        { children }
        </Suspense>
        </div>
       
        </div>
    )
}
export default Maindivider