import React from 'react'

const styles = {
    container : "w-[100%] bg-bg_light h-[4vh]",
    brown1 : "w-full bg-bg_dark h-[2vh]",
    brown2 : "w-full bg-bg_dark mt-[10px] h-[2vh]"

}

function Divider(props) {
  return (
    <div className={styles.container + " " + props.classes}>
        <div className={styles.brown1}>

        </div>
        <div className={styles.brown2}>

        </div>
    </div>
  )
}

export default Divider