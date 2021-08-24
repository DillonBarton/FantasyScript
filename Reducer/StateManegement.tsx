import axios from "axios";
import { useState, useEffect, useReducer} from "react";


export const ACTIONS = {
    DATA_LOCATION: 'axiosReq',
    BASKET_ADD: 'addToBasket'
}

// check if can use constructor function in index.tsx

export function ApiCall(baseURL, URI, page, component){
    this.URL = baseURL;
    this.URI = URI;
    this.page = page;
    this.component = component;
    this.action = ACTIONS.DATA_LOCATION;
}
// return failed or success

export default function StateManager(params){

    const api = axios.create({
        baseURL: `${params.URL}${params.URI}`
    })

    function reducer(payLoad, params) {
        switch (params.action) {
            case ACTIONS.DATA_LOCATION:
                let response = axiosRequest()
                    .then(res => {
                        if (res[1]){
                            return res[1]
                        }
                        return res[0];
                    })
                if (params.component){
                    return {...payLoad, [params.page]: { [params.component]: response}}
                }
                return {...payLoad, [params.page]: response};
            case ACTIONS.BASKET_ADD:

                return;
            default:
                throw new Error();
        }
    }

    const axiosRequest = async () => {
        try{
            let response = await api.get('/')
                .then(res => res.data);
            return [response, null]
        }catch (err){
            return [null, err]
        }
    }

    const [ payLoad, dispatch ] = useReducer(reducer, {})

    return [dispatch, payLoad];
}
