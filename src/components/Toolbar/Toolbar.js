import React from 'react'
import {Header, Curate, Hamburger, Auth} from './style'
import {FaBars} from 'react-icons/fa'
import Login from './Login/Login'

const Toolbar = props => {

    return (
      <Header>
        <Hamburger><FaBars /></Hamburger>
        <Curate>Curate</Curate>
        <Auth>
        <Login />
        </Auth>
        
      </Header>
    )

}

export default Toolbar