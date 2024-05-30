import { NextRequest, NextResponse } from "next/server"
import { collection, getDocs,addDoc ,query,orderBy,updateDoc,deleteDoc,doc,setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebase"
import {noticeboard, Ifetch} from '../../model'
const mydb = collection(db, "board")

// data 가져오기
async function fetchboard() {
  const querySnapshot = await getDocs( query(mydb,orderBy("create")));
  if(querySnapshot.empty){
    return [];
  }
  const result = [] as noticeboard[]
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.data(),'가져온거 값')
    const board= {
      userid : doc.data()["userid"],
      content : doc.data()["content"],
      create : doc.data()["create"],
      
    } as noticeboard
    result.push(board)
    // doc.data()
  });
  return result
} 
// 추가하기
async function addboard(content:string,create:string,userid:string) {
  // const create = Timestamp.fromDate(new Date())
  const newboardRef = doc(mydb);
  const data ={
    content,
    id:newboardRef.id,
    create,
    userid 
  }
  await setDoc(newboardRef, data);
 
return data
}




export async function GET (req : NextRequest)  {
  const resultdata = await fetchboard();
   const response = resultdata

    return NextResponse.json(response,{ status : 200 })
  }
export async function POST (req : NextRequest)  {
  const {content,create,userid} =await req.json()
  const adddata = await addboard(content,create,userid);
  const response :Ifetch = {
      msg : "데이터추가성공",
      data : adddata
  }  
    return NextResponse.json(response,{ status : 201 })
  }



