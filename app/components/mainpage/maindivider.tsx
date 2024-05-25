"use client"
import React from 'react'
import Side from "../../components/mainpage/side/side";
import Explorer from "../../components/mainpage/explorer/explorer";
import { useAppDispatch,useAppSelector } from '@/app/store/hook';
import { Profile } from "../../components/mainpage/profile/profile";
import main from '../../style/mainpage.module.scss'
import { Profiledivider } from './profile/profiledivider';
import Homeview from './homeview/homeview';
import Mainheader from '@/app/components/mainpage/mainheader/mainheader'
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
        <Mainheader/>
        { children }
        </div>
        </div>
    )
}
export default Maindivider