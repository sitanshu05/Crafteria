import React from 'react'

const styles = {
    button : "bg-button_dark text-base px-[1rem] rounded-[50px]"
}

function ButtonDark(props) {
  return (
    <button className={styles.button + " " + props.classes}>
        {props.text}
    </button>
  )
}

export default ButtonDark