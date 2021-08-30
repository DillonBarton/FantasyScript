import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import styles from './glassScrollBar.module.css'
import {func} from "prop-types";

export default function GlassScrollBar() {

    const scrollBar = useRef(null);
    const scrollBarTrack = useRef(null);
    const scrollPosition = useRef<number>(null);
    const lastScrollTo = useRef<number>(null);
    const valueStillEqual = useRef<boolean>(false)

    const preventDefault = (e) => {
        e.preventDefault();
    }

    // set the scrollbar size to track ratio equivalent to the clientHeight to scrollHeight + clientHeight ratio.
    const scrollBarResize = useCallback(() => {
        let pageHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        pageHeight +=125
        let scrollBarRatio = scrollHeight / pageHeight;
        scrollBar.current.style.height = `${pageHeight / scrollBarRatio}px`;
    }, [])

    // make the position of the scrollbar inside of the track equivalent to that of the clients view inside of the document.
    const scrollBarPosition = useCallback(() =>{
        let pageHeight = document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        pageHeight -= 145;
        scrollHeight -=145;
        scrollTop += 20;
        let scrollTopRatio = scrollTop / (scrollHeight + pageHeight);
        scrollBar.current.style.top = `${ ( scrollBarTrack.current.clientHeight * scrollTopRatio )}px`;
    }, [])

    // when the scrollBar is dragged move the scrollBar appropriately.
    const scrollBarDrag = (e) => {

        let mousePosition = (e.pageY - 145) - window.scrollY;


        let trackHeight = scrollBarTrack.current.clientHeight;

        let pageHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;
        pageHeight -= 145;
        scrollHeight -=145;

        let windowHeight = scrollHeight +  pageHeight;

        let trackToPageRatio = windowHeight / trackHeight;

        let scrollingTo = mousePosition * trackToPageRatio;

        scrollPosition.current = window.scrollY;

        if( lastScrollTo.current === null){
            lastScrollTo.current = scrollingTo;
        }

        if( scrollingTo > scrollPosition.current ){

            // if user is scrolling down.

            if( scrollingTo > lastScrollTo.current ){

                // if user keeps dragging mouse down then keep scrolling down without refreshing scrollTo.

                if( scrollPosition.current + 50 >= lastScrollTo.current ){

                    // if the window position is within 100px of the lastScrolledTo value scrollingTo is then updated

                    document.documentElement.scrollTo(0, scrollingTo);
                    lastScrollTo.current = scrollingTo;
                    valueStillEqual.current = false;

                }

            } else if( scrollingTo < lastScrollTo.current ) {

                // if last scrollingTo value is now bigger than current scrollingTo value make update to ensure window doesnt scroll past

                document.documentElement.scrollTo(0, scrollingTo);
                lastScrollTo.current = scrollingTo;
                valueStillEqual.current = false;


            } else {

                // if last scrollingTo value is equal to current (only occurs at the beginning of function)

                if( valueStillEqual.current ){

                } else {

                    // if the mouse is still in the same place do not reset value
                    document.documentElement.scrollTo(0, scrollPosition.current);
                    valueStillEqual.current = true;

                }

            }

        } else {

            // scrolling up

            if( scrollingTo < lastScrollTo.current ) {

                // still Scrolling up

                if ( scrollPosition.current - 50 <= lastScrollTo.current ) {

                    // if window scroll position is getting too close to the last set value of scrollingTo reset scrollingTo
                    document.documentElement.scrollTo(0, scrollingTo)
                    lastScrollTo.current = scrollingTo;
                    valueStillEqual.current = false;

                }

            } else if( scrollingTo > lastScrollTo.current ) {

                // if current scrollingTo value is now bigger than the last then update to ensure the user does not scroll past desired position
                document.documentElement.scrollTo(0, scrollingTo);
                lastScrollTo.current = scrollingTo;
                valueStillEqual.current = false;

            } else {

                // if last scrollingTo value is equal to current (only occurs at the beginning of function)

                if( valueStillEqual.current ){

                } else {

                    // if the mouse is still in the same place do not reset value
                    document.documentElement.scrollTo(0, scrollPosition.current);
                    valueStillEqual.current = true;

                }

            }

        }

    }

    const glow = (e) => {
        valueStillEqual.current = false;
        lastScrollTo.current = null;
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