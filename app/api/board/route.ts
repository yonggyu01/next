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
    const board :noticeboard= {
      userid : doc.data()["userid"],
      content : doc.data()["content"],
      create : doc.data()["create"],
      
    } 
    result.push(board)
    // doc.data()
  });
  return result
} 
// 추가하기
async function addboard(content:string,create:string,userid:string) {
  // const create = Timestamp.fromDate(new Date())

  const newboardRef =await addDoc(mydb,{content,create,userid});
  const data ={
    content,
    id:newboardRef.id,
    create,
    userid 
  }
  // await setDoc(newboardRef, data);
 
return data
}




export async function GET (req : NextRequest)  {
  const resultdata = await fetchboard();
   const response = resultdata

    return NextResponse.json(response,{ status : 200 })
  }
export async function POST (req : NextRequest)  {
  // console.log(req.clone().json() ,'뭐라고 들어오지?')
  const {content,create,userid} =await req.json()
  console.log(content,create,userid,'서버에 잘들어오나')
  const adddata = await addboard(content,create,userid);
  const response :Ifetch = {
      msg : "데이터추가성공",
      data : adddata
  }  
    return NextResponse.json(response,{ status : 201 })
  }



