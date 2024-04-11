import styled from "styled-components";

export default function FSPageLoader() {
  const Pageloader = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: rgb(15, 15, 15);
    opacity: 1;
    font-size: 5rem;
    z-index: 1000000;
  `;

  return <Pageloader></Pageloader>;
}
