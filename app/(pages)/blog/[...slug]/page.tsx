import {Steemitdata,SteemitResult, body} from "@/app/model"
import React from 'react'
// import { useAppDispatch,useAppSelector } from '../../../store/hook';
import {useAppSelector} from '@/app/store/hook'
export type slugprops= [string, number]
import Getstorepage from './getstorepage';

export default function Blogdetail ({ params }: { params: { slug: slugprops } }){
    // const data = useAppSelector(state => state.Mystore.blogdata)
    // console.log(params.slug, data , 'data')
    return (
        <div>
            <Getstorepage params={params.slug}></Getstorepage>
        </div>
    )
}
