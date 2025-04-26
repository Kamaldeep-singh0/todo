import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../src/config";

export function useTodos(){
    const [data,setData] = useState([]);

    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/v1/post`,{
            headers:{
                authorization : localStorage.getItem("token")
            }
        }).then((res)=>{
            setData(res.data);
    })},[])

    return data;
}