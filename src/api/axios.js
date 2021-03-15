import axios from 'axios'
// 返回的是promise对象
// data={}  如果没有值，默认为空
export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        return axios.get(url,{
            params:{
              ID:data
            }
        })
    }else{
        return axios.post(url,data)
    }
}