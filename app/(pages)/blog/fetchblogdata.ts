import {Steemitdata,SteemitResult} from "@/app/model"
export const blogdata = async ():Promise<SteemitResult> => {
  let data = await fetch('https://api.steemit.com', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     jsonrpc: '2.0',
     method: 'condenser_api.get_blog',
     params: ['yonggyu01', 0, 150],  
     id: '1',}),
  cache: 'no-store'
   })
   let result = await data.json()
   return result
 }