import axios from "axios";
import {useState, useEffect} from "react";

export default function useAxios(params: {baseUrl: string, pathParams: string, queryParams: string, headers: object}) {

    const [response, setResponse] = useState(null)
    const [dataFetched, setDataFetched] = useState(false)

    const api = axios.create({
        baseURL: `${ params.baseUrl }`,
        timeout: 10000,
        withCredentials: true,
        headers: params.headers
    })


    useEffect(()=>{
        if(params.baseUrl){
            api.get(params.pathParams + params.queryParams)
            .then( res => {
                setDataFetched(true);
                setResponse(res);
            })
            .catch(err => alert(err))
        }
    }, [params.baseUrl])

    return [ response, dataFetched ]
}