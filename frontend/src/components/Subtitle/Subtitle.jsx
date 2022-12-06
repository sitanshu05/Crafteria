import React from 'react'

const styles = {
    container : "bg-bg_dark w-full text-center",
    textSection : "text-5xl text-white font-header_font border-y-[5px] border-bg_light py-[0.5rem]"

}

function Subtitle(props) {
  return (
    <div className={styles.container + " " + props.classes}>
        <div className={styles.textSection}>
            {props.text}
        </div>
    </div>
  )
}

export default Subtitle