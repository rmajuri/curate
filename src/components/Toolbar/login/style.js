import styled from 'styled-components'

export const LoginLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 35%;
  height: 100%;
  justify-content: space-between;
`
export const LinkContainer = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
`

export const LinkStyle = styled.p`
  color: #778899;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  letter-spacing: 0.1rem;
  :hover {
    color: #b0c4de;
  }
  :active {
    color: #b0c4de;
  }
`



