import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import styles from './glassScrollBar.module.css'
import {func} from "prop-types";

export default function GlassScrollBar() {


    let YOffset = useMemo(()=>{
        return 0;
    }, [])
    const scrollBar = useRef(null);
    const scrollBarTrack = useRef(null);
    const currentScrollPos = useRef<number>(null);
    const scrolledTo = useRef<number>()
    const [ longScroll, setLongScroll ] = useState(false);
    let scrolledToController = useMemo(()=>{
        return 0;
    }, [])
    const preventDefault = (e) => {
        e.preventDefault();
    }

    const scrollBarResize = useCallback(() => {
        let pageHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        pageHeight +=125
        let scrollBarRatio = scrollHeight / pageHeight;
        scrollBar.current.style.height = `${pageHeight / scrollBarRatio}px`;
    }, [])

    const scrollBarPosition = useCallback(() =>{
        let pageHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        pageHeight += 125;
        let scrollTopRatio = scrollTop / (scrollHeight + pageHeight);
        scrollBar.current.style.top = `${ ( scrollBarTrack.current.clientHeight * scrollTopRatio )}px`;
    }, [])

    const scrollBarDrag = (e) => {

        let mousePosition = e.pageY - window.scrollY;

        // let mouseMovedBy = mousePosition - YOffset;

        let trackHeight = document.documentElement.clientHeight - 125;

        let windowHeight = document.documentElement.scrollHeight +  document.documentElement.clientHeight;

        let trackToPageRatio = windowHeight / trackHeight;

        // let scrolledBy = mouseMovedBy * trackToPageRatio

        scrolledTo.current = mousePosition * trackToPageRatio

        currentScrollPos.current = window.scrollY;

        if(scrolledTo.current > (currentScrollPos.current + 1000) && longScroll === false){


            setLongScroll(true);
            scrolledToController = scrolledTo.current;
            document.documentElement.scrollTo(0, scrolledToController)

        }

        if((currentScrollPos.current + 100) >= scrolledToController){

            document.documentElement.scrollTo(0, scrolledTo.current)
            setLongScroll(false)


        } else if((currentScrollPos.current + 100) <= scrolledToController) {

            document.documentElement.scrollTo(0, scrolledTo.current)
            setLongScroll(false)

        }else{
            document.documentElement.scrollTo(0, scrolledTo.current)
        }

    }

    const glow = (e) => {
        YOffset = e.pageY - window.scrollY;
        scrollBar.current.classList.add(`${styles.scrollBarThumbActive}`);
        window.addEventListener("mousemove", scrollBarDrag);
        window.addEventListener("selectstart", preventDefault);
    }
    const glowOff = () => {
        scrollBar.current.classList.remove(`${styles.scrollBarThumbActive}`);
        window.removeEventListener("selectstart", preventDefault);
        window.removeEventListener("mousemove", scrollBarDrag)
    }
    useLayoutEffect(()=>{

        scrollBar.current.addEventListener("mousedown", glow)
        window.addEventListener("mouseup", glowOff)
        window.addEventListener("resize", scrollBarResize);
        window.addEventListener("scroll", scrollBarPosition);

    }, [])

    useLayoutEffect(()=>{
        scrollBarResize()
    }, [])

    return(
        <div ref={scrollBarTrack} className={`${styles.scrollBarTrack}`}>
            <div ref={scrollBar} className={`${styles.scrollBarThumb}`}/>
        </div>
    )
}