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
                let newData = {...data, [`${payLoad.res.data.title}`]: { ...payLoad.res } }
                console.log("newData = " + newData);
                return {...newData};
            case ACTIONS.BASKET_ADD:

                return {...data};
            default:
                console.error("error")
                return;
        }
    }

    const [ data, dispatch ] = useReducer(reducer, null)

    useEffect(()=>{
        if(payLoad){
            if(payLoad.action){
                dispatch(payLoad)
            }
        }
    }, [payLoad])

    return [ data, dispatch ];
}
