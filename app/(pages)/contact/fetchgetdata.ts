import axios,{AxiosResponse} from "axios"
export const fetchcontact=async ()  =>{
    try{
    const get:AxiosResponse = await axios.get('/api/board')
    const result = get.data
    return result
    } catch (err){
        console.log('데이터 가져오기 오류')
    }
}
