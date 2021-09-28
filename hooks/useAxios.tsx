import axios from "axios";
import {useState, useEffect} from "react";

export default function useAxios(params: {baseUrl: string, pathParams: string, queryParams: string, headers: object}) {

    const [response, setResponse] = useState(null)
    const [dataFetched, setDataFetched] = useState(false)

    const api = axios.create({
        baseURL: `${ params.baseUrl }`,
        timeout: 10000,
        headers: params.headers
    })


    useEffect(()=>{
        if(params.baseUrl){
            api.get(params.pathParams + params.queryParams)
            .then( res => {
                setDataFetched(true);
                console.log(res)
                setResponse({action: 'storeData', res: {...res}});
            })
            .catch(err => alert(err))
        }
    }, [params.pathParams, params.queryParams])

    return [ response, dataFetched ]
}