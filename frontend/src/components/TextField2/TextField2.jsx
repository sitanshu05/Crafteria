import React from 'react'

function TextField1(props) {
    return (
        <div>
            <label htmlFor="inp_id" className='font-header_font italic text-white bg-bg_dark w-[20rem] p-[0.5rem] text-xl block'>{props.label}</label>
            <input type={props.type}
                name={props.name}
                id="inp_id"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.ChangeHandler}
                className={"font-header_font italic text-white bg-bg_light w-[20rem] rounded-[5px] placeholder:text-white placeholder:text-xl p-[0.5rem] " + props.classes} />
        </div>
    )
}

export default TextField1