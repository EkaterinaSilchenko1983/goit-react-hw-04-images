import styled from 'styled-components';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalImage = styled.div`
  position: absolute;
  top: 5%;

  left: 15%;
  width: 70%;
  height: 70%;
  object-fit: contain;
`;
