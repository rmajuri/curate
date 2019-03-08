import styled from 'styled-components'

export const Header = styled.header`
  height: 12%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fffff0;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`
export const Hamburger = styled.div`
  color: #778899;
  font-size: 1.5rem;
  display: flex;
  flex: 1;
  align-items: center
  justify-content: flex-start;

`

export const Curate = styled.h1`
  display: flex;
  flex: 1;
  align-items: center
  justify-content: center;
  font-size: 1.5rem;
  color: #b0c4de;
  letter-spacing: 0.1rem;
`
export const Auth = styled.div`
  display: flex;
  flex: 1;
  align-items: center
  justify-content: flex-end;
`