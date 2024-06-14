import axios,{AxiosResponse} from "axios";
import {Ifetch,noticeboard} from '../../model'
export async function fetchadd (obj:noticeboard){
    try{
                   const add:AxiosResponse = await axios.post('/api/board',obj)
        const result = add.data
        return result
    }catch(err){
        console.log('server')
    }
}