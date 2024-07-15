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
     params: ['yonggyu01', 0, 125],  
     id: '1',}),
   })
   let result = await data.json()
   console.log('datafetching..  서버에서 재검증중')
   return result

 }