import axios from "axios";
import {useState, useEffect} from "react";

export default function useAxios(params: {URL: string, headers: object}) {

    const [payLoad, setPayLoad] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    console.log(params)

    const api = axios.create({
        baseURL: `${ params.URL }`,
        timeout: 10000,
        withCredentials: true,
        headers: params.headers
    })


    useEffect(()=>{
        api.get('/')
            .then( res => {
                setIsLoading(true);
                console.log(res)
                setPayLoad(res);
                console.log(res);
            })
            .catch(err => alert(err))
    }, [params.URL])

    return [ payLoad, isLoading ]
}