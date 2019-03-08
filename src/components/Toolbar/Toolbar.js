import React from 'react'
import {Header, Curate, Hamburger} from './style'
import {FaBars} from 'react-icons/fa'

const Toolbar = props => {

    return (
      <Header>
        <Hamburger><FaBars /></Hamburger>
        <Curate>Curate</Curate>
      </Header>
    )

}

export default Toolbar