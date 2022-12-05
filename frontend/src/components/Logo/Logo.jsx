import React from 'react'
import logo from '../../assets/images/logo.png'

function Logo(props) {
  return (
    <img src={logo} alt="" className={" " + props.classes}/>
  )
}

export default Logo