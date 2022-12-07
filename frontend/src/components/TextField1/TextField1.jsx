import React from 'react'

function TextField1(props) {
  return (
    <input type={props.type} 
           name = {props.name}
           id="inp_id"
           placeholder={props.placeholder}
           value = {props.value}
           onChange = {props.changeHandler}
        className = {"font-header_font italic text-white bg-bg_light w-[20rem] rounded-[5px] placeholder:text-white placeholder:text-xl p-[0.5rem] " + props.classes}/>
  )
}

export default TextField1