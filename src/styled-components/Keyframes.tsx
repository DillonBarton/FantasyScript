import { keyframes } from "styled-components";

export const Dream = keyframes`
    from{
        -webkit-transform: rotateZ(20deg);
                transform: rotateZ(20deg);
    }
    to{
        -webkit-transform: rotateZ(0deg);
                transform: rotateZ(0deg);
    }
`;

export const DreamWorld = keyframes`
    0%{
        -webkit-transform: translate(-50%, -50%) rotateZ(-10deg);
                transform: translate(-50%, -50%) rotateZ(-10deg);
        -webkit-transform-origin: 65% 60%;
                transform-origin: 65% 60%;
    }
    100%{
        -webkit-transform: translate(-50%, -50%) rotateZ(45deg);
                transform: translate(-50%, -50%) rotateZ(45deg);
        -webkit-transform-origin: 65% 60%;
                transform-origin: 65% 60%;
    }
`;
