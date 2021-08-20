import axios from "axios";
import {useState, useEffect} from "react";
import {use} from "ast-types";



export default function useAxios(URL) {

    const [payLoad, setPayLoad] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    const api = axios.create({
        baseURL: `${ URL }`
    })


    useEffect(()=>{
        api.get('/')
            .then( res => {
                setIsLoading(false);
                setPayLoad(res);
            })
            .catch(err => alert(err))
    }, [URL])

    return { payLoad, isLoading }
}