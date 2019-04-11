import styled from 'styled-components'

export const Header = styled.header`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fffff0;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0;
`
export const Hamburger = styled.div`
  color: #778899;
  font-size: 1.3rem;
  display: flex;
  flex: 1;
  align-items: center
  justify-content: flex-start;
`
export const Curate = styled.h1`
  display: flex;
  font-weight: normal;
  flex: 1;
  align-items: center
  justify-content: center;
  font-size: 1.5rem;
  color: #b0c4de;
  letter-spacing: 0.25rem;
`
export const Auth = styled.div`
  display: flex;
  flex: 1;
  align-items: center
  justify-content: flex-end;
`