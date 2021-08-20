import axios from "axios";
import { useState, useEffect, useReducer} from "react";


// return failed or success

export default function useStateManager(props:{URL, page, component}){

    const ACTIONS = {
        DATA_LOCATION: 'axiosReq'
    }

    const api = axios.create({
        baseURL: `${ props.URL }`
    })

    let payLoadPage = props.page
    let payLoadComponent = props.component

    function reducer(payLoad, action) {
        switch (action.type) {
            case ACTIONS.DATA_LOCATION:

                let response = axiosRequest().then(res => {
                    console.log(res)
                    return res;
                })
                console.log(response)
                console.log({...payLoad, response})
                return {...payLoad, payLoadPage: { payLoadPage: response, component: []}};
            case '':
                return;
            default:
                return;
        }
    }
    const axiosRequest = async () => {
        try{
            let response = await api.get('/')
            console.log(response)
            return [response, null]
        }catch (err){
            return [null, err]
        }
    }
    const [ payLoad, dispatch] = useReducer(reducer, {})


    useEffect(()=>{

        reducer(payLoad, {type: ACTIONS.DATA_LOCATION})
        console.log(payLoad)
     }, [props.URL])

    return payLoad;
}
