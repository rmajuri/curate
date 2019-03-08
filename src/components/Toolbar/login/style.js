import styled from 'styled-components'

export const LoginLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 100%;
`
export const LinkContainer = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
`

export const Link = styled.a`
  color: #778899;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;
  :hover {
    color: #b0c4de;
  }
  :active {
    color: #b0c4de;
  }
`



