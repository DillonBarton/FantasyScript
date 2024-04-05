import {useState, RefObject, useEffect} from 'react'
import styles from "@/components/pageSection/pageSection.module.css";

export default function useAnimateOnScroll(ref: RefObject<any>, classes?: string[]){

    const [ animated, setAnimated ] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            let offset = document.documentElement.clientHeight + window.scrollY;
            let scrollHeight = ref.current.getBoundingClientRect().top + window.scrollY;
            if( offset >= scrollHeight && !animated ) {
                setAnimated(true)
                if(classes) ref.current.classList.add(classes.join(" "))
            } else if( offset <= scrollHeight && animated ) {
                setAnimated(false)
                if(classes) ref.current.classList.remove(classes.join(" "))
            }
        })
    }, [classes, ref])

    return animated;

}