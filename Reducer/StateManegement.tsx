import axios from "axios";
import { useState, useEffect, useReducer} from "react";


export const ACTIONS = {
    DATA_STORE: 'storeData',
    BASKET_ADD: 'addToBasket'
}

export default function useStateManager(payLoad){

    function reducer(data, payLoad) {
        switch (payLoad.action) {
            case ACTIONS.DATA_STORE:
                
                return {...data};
            case ACTIONS.BASKET_ADD:

                return {...data};
            default:
                console.log("error")
                return;
        }
    }

    const [ data, dispatch ] = useReducer(reducer, null)

    useEffect(()=>{
        if(payLoad){
            dispatch(payLoad)
        }
    }, [payLoad])

    return [ data, dispatch ];
}
