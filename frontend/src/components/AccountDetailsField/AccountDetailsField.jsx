import React from 'react'

function AccountDetailsField(props) {
  return (
    <div className='text-white font-header_font text-xl rounded-[10px] w-full'>
        <span className='italic bg-bg_light p-[1rem] rounded-l-[10px] w-[15rem]'>{props.label}</span>
        <span className='bg-bg_dark p-[1rem] rounded-r-[10px] w-[15rem]'>{props.value}</span>
    </div>
  )
}

export default AccountDetailsField