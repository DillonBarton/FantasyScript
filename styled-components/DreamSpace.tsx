import Image from 'next/image'
import styled from 'styled-components'

import { DreamWorld, Dream } from './Keyframes'

const DreamContainer = styled.div`
    position: fixed;
    top: 0;
    left: 40%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 3 !important;
    -webkit-perspective: 1px;
    perspective: 1px;
    -webkit-perspective-origin: center center 0;
    perspective-origin: center center 0;
        img {
            width: 120vw;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transform-origin: 50% 100%;
            -ms-transform-origin: 50% 100%;
            transform-origin: 50% 100%;
            -webkit-animation: ${Dream} 2s ease-out forwards;
            animation: ${Dream} 2s ease-out forwards;
        }
`;

const DreamWorldContainer = styled.div`
    img {
        position: fixed;
        top: 110%;
        left: 36%;
        width: 130vw;
        -webkit-animation: ${DreamWorld} 2.5s ease-out forwards;
        animation: ${DreamWorld} 2.5s ease-out forwards;
    }
`;

export default function DreamSpace(){

    
    return(
        <div className={`boxW100H100`}>
            {/* <DreamContainer className={`boxW100H100`}>

                <img src="/images/dream.png" alt="dreamBackround"/>

            </DreamContainer> */}

            <DreamWorldContainer className={`flexColumn sc boxW100`}>
        
                <img src="/images/dreamWorld.jpg" alt="dreamWorld"/>

            </DreamWorldContainer>

        </div>
    )
}