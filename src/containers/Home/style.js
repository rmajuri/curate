import styled from 'styled-components'

export const SearchContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`

export const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  border-color: ##fdfdff;
  border-style: none;
  margin-bottom: 5px;
  font: inherit;
  padding: 10px;
  box-sizing: border-box;
  color: #b0c4de;
//   color: #191970;
  font-size: 1rem;
  letter-spacing: 0.2rem;
  :focus {
    outline: none;
    background-color: aliceblue;
  }
`
export const SearchButton = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: ghostwhite;
    color: #b0c4de;
    letter-spacing: 0.2rem;
    font-size: .75rem;
    align-self: flex-end;
    font-family: 'Times New Roman', Times, serif;
    box-shadow: 0 0px 1px  #b0c4de;
    cursor: pointer;
    :hover {
      background-color: aliceblue;
    }
`
