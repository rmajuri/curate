import React from 'react'
import Aux from '../../hoc/Aux/Aux'
import {SearchBar, SearchButton, SearchContainer} from './style'

const Home = props => {
  return (
      <Aux>
        <SearchContainer>
        <SearchBar />
        <SearchButton>Search</SearchButton>
        </SearchContainer>
      </Aux>
  )
}

export default Home