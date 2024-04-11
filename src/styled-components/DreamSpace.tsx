"use client"

import styled from "styled-components";

import { DreamWorld, Dream } from "./Keyframes";

const DreamContainer = styled.div`
    position: fixed;
    top: 0;
    left: 40%;
    transform: translate(-50%, -50%);
    z-index: 3 !important;
    perspective: 1px;
    perspective-origin: center center;
    img {
        width: 120vw;
        transform-style: preserve-3d;
        transform-origin: 50% 100%;
        animation: ${Dream} 2s ease-out forwards;
    }
`;

const DreamWorldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    img {
        position: fixed;
        top: 110%;
        left: 36%;
        width: 130vw;
        -webkit-animation: ${DreamWorld} 2.5s ease-out forwards;
        animation: ${DreamWorld} 2.5s ease-out forwards;
    }
`;

export default function DreamSpace() {
  return (
    <div className="w-full h-full">
      <DreamWorldContainer>
        <picture>
          <source srcSet="/images/dreamWorld.avif" />
          <source srcSet="/images/dreamWorld_50.webp" />
          <img src="/images/dreamWorld_50.jpg" alt="dreamWorld" />
        </picture>
      </DreamWorldContainer>
    </div>
  );
}
