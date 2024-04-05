import React from 'react';
import {cn} from "@/lib/utils";

const SectionDivider = ({
    isTop = false
}: {
    isTop?: boolean
}) => {
    return (
        <svg
            className={cn("w-full relative z-20", isTop ? "top-[-1px]" : "bottom-0")}
            style={{
                transform: isTop ? "rotateZ(180deg)" : ""
            }}
            fill="#1D1D1D"
            viewBox="0 0 1440 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                style={{transform: "translate(0, 0px)", opacity: "1"}}
                d="M0,70L480,40L960,10L1440,30L1920,50L2400,0L2880,40L3360,20L3840,30L4320,50L4800,10L5280,50L5760,0L6240,10L6720,70L7200,30L7680,80L8160,90L8640,20L9120,60L9600,50L10080,70L10560,50L11040,20L11520,50L11520,100L11040,100L10560,100L10080,100L9600,100L9120,100L8640,100L8160,100L7680,100L7200,100L6720,100L6240,100L5760,100L5280,100L4800,100L4320,100L3840,100L3360,100L2880,100L2400,100L1920,100L1440,100L960,100L480,100L0,100Z"
            />
        </svg>
    );
};

export default SectionDivider;