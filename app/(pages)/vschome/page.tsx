import Image from "next/image";
import React from 'react'
import { blogdata } from "../blog/fetchblogdata";
import home from './vschome.module.scss'
import Homeview from "@/app/components/mainpage/homeview/homeview";

export default async function Vschome(){

  return (
<Homeview></Homeview>
  );
}
