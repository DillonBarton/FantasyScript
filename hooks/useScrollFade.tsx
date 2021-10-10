import { useRef, useLayoutEffect, useState } from 'react'

export default function useScrollFade(ref, animation, setAnimation){

    
    useLayoutEffect(()=>{
        window.addEventListener("scroll", ()=>{
            let offset = document.documentElement.clientHeight + window.scrollY;
            let scrollHeight = ref.current.getBoundingClientRect().top + window.scrollY;
            console.log(scrollHeight, offset);
            if( offset >= scrollHeight && animation === false ) {
                setAnimation(true)
            } else if( offset <= scrollHeight && animation === true ) {
                setAnimation(false)
            }
        })
    })

    return animation;

}