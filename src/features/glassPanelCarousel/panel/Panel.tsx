"use client"

import styles from "@/features/glassPanelCarousel/glassCarousel.module.css";
import {useEffect, useState} from "react";
import {cn} from "@/lib/utils";

const getWrapperClass = (count: number): string => {
    switch (count) {
        case 0:
            return styles.nextWrapper
        case 1:
            return styles.leftWrapper
        case 2:
            return styles.centerWrapper
        case 3:
            return styles.rightWrapper
        case 4:
            return styles.lastWrapper
        default:
            return styles.defaultWrapper
    }
}

const getContainerClass = (count: number): string => {
    switch (count) {
        case 1:
            return styles.leftContainer
        case 2:
            return styles.centerContainer
        case 3:
            return styles.rightContainer
        default:
            return styles.defaultContainer
    }
}

const getPanelClass = (count: number): string => {
    switch (count) {
        case 1:
            return styles.leftPanel
        case 2:
            return styles.centerPanel
        case 3:
            return styles.rightPanel
        default:
            return styles.defaultPanel
    }
}

const Panel = ({
   initialValue = 1,
   children,
   panelMediaClasses
}: {
    initialValue?: number;
    children: React.ReactNode;
    panelMediaClasses?: string;
}) => {
    const [count, setCount] = useState(initialValue)

    useEffect(() => {

        const timeOut = setTimeout( () => {
            setCount((count) => count === 5 ? 0 : count + 1)
        }, 10_000)

        return () => {
            clearTimeout(timeOut)
        }
    }, [count]);

    return (
        <div className={cn(`${styles.panelWrapper} h-full`, getWrapperClass(count))}>
            <div className={cn(`${styles.panelContainer} h-full`, getContainerClass(count))}>
                <div className={cn(`${styles.panel} flex flex-col justify-start items-center h-full`, getPanelClass(count))}>
                    <div className={cn(styles.panelMediaContainer, panelMediaClasses)}>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;