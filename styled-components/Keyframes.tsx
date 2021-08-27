import { keyframes } from 'styled-components'


export const Dream = keyframes`
    from{
        -webkit-transform: rotateZ(20deg);
                transform: rotateZ(20deg);
    }
    to{
        -webkit-transform: rotateZ(0deg);
                transform: rotateZ(0deg);
    }
`

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
`

export const LeftWrapperKF = keyframes`
    from{
        left: 0;
        transform-origin: 50% 50% -90000px;
        transform: translate3d(-50%, 0, -5.7px) rotateY(359.3deg);
    }
    to{
        left: 50%;
        transform-origin: 50% 50% -90000px;
        transform: translate3d(-50%, 0, -1px) rotateY(360deg);
    }
    
`

export const CenterWrapperKF = keyframes`
    from{
        left: 50%;
        transform-origin: 50% 50% -90000px;
        transform: translate3d(-50%, 0, -2px) rotateY(0deg);
    }
    to{
        left: 0;
        transform-origin: 50% 50% -100000px;
        transform: translate3d(200px, 0, -3px) rotateY(0.7deg);
    }
`

export const rightWrapperKF = keyframes`
    from{
        opacity: 1;
        left: 0;
        transform-origin: 50% 50% -100000px;
        transform: translate3d(200px, 0, -2px) rotateY(0.7deg);
    }
    to{
        opacity: 0;
        left: 0;
        transform-origin: 50% 50% -100000px;
        transform: translate3d(200px, 0, -5px) rotateY(1.2deg);
    }
`

export const SidepanelContainerKF = keyframes`
    0%{
        transform: rotateY(0deg) rotateX(0deg);
    }
    20%{
        transform: rotateY(0.01deg) rotateX(-0.01deg) rotateZ(-0.7deg) translateY(-10px);
    }
    40%{
        transform: rotateY(-0.01deg) rotateX(0.007deg) rotateZ(0.7deg) translateY(10px);
    }
    60%{
        transform: rotateY(0.01deg) rotateX(0.02deg) rotateZ(0.7deg) translateY(-10px);
    }
    80%{
        transform: rotateY(-0.01deg) rotateX(-0.01deg) rotateZ(-0.7deg) translateY(10px);
    }
    100%{
        transform: rotateY(0deg) rotateX(0deg);
    }
`

export const CenterPanelContainerKF = keyframes`
    0%{
        transform: rotateY(0deg) rotateX(0deg);
    }
    20%{
        transform: rotateY(0.01deg) rotateX(-0.01deg) rotateZ(-0.7deg) translateY(-10px);
    }
    40%{
        transform: rotateY(-0.01deg) rotateX(0.003deg) rotateZ(0.7deg) translateY(10px);
    }
    60%{
        transform: rotateY(0.007deg) rotateX(0.01deg) rotateZ(0.7deg) translateY(-10px);
    }
    80%{
        transform: rotateY(-0.01deg) rotateX(-0.01deg) rotateZ(-0.7deg) translateY(10px);
    }
    100%{
        transform: rotateY(0deg) rotateX(0deg);
    }
`

export const PanelKF = keyframes`
    0%{
        transform: translateZ(-3px) rotateX(0.5deg);
        opacity: 0;
    }
    100%{
        transform: translateZ(-0.1px) rotateX(0.05deg);
        opacity: 1;
    }
`

export const SidePanelKF = keyframes`
    0%{
        transform: translateZ(-3px) rotateX(0.5deg);
        opacity: 0;
    }
    100%{
    transform: translateZ(-1px) rotateX(0.15deg);
        opacity: 1;
    }
`

export const opacity = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
export const slide = keyframes`
    0 % {
        transform: translate(0, 0);
    }
    2% {
        transform: translate(33px, 0);
    }
    12.5% {
        transform: translate(33px, 0);
    }
    15.5% {
        transform: translate(66px, 0);
    }
    25% {
        transform: translate(66px, 0);
    }
    27% {
        transform: translate(66px, 33px);
    }
    37.5% {
        transform: translate(66px, 33px);
    }
    39.5% {
        transform: translate(33px, 33px);
    }
    50% {
        transform: translate(33px, 33px);
    }
    52% {
        transform: translate(33px, 66px);
    }
    62.5% {
        transform: translate(33px, 66px);
    }
    64.5% {
        transform: translate(0, 66px);
    }
    75% {
        transform: translate(0, 66px);
    }
    77% {
        transform: translate(0, 33px);
    }
    87.5% {
        transform: translate(0, 33px);
    }
    89.5% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`
export const gradient1 = keyframes`
    from {
        stop-color: #4383b8;
    }
    50% {
        stop-color: #8013b9;
}
    to {
        stop-color: #4383b8;
    }
`
export const gradient2 = keyframes`
    from {
        stop-color: #4aa06c;
    }
    50% {
        stop-color: #b22358;
}
    to {
        stop-color: #4aa06c;
    }
`
export const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`