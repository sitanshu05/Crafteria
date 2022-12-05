import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import Divider from '../../components/Divider/Divider'

const styles = {
    container: "bg-cover bg-bg_home flex flex-col items-center justify-start",
    nav: "",
    invite_body: "",
    invite : "font-header_font text-white text-center text-7xl bg-bg_light mt-[5rem] p-[6rem] rounded-[30px] flex flex-col items-center justify-around h-full",
    invite_highlight : "inline italic",
    shop_button : "text-[2rem] p-[0.5rem]",
    divider1 : "mt-[12rem]"
}

function LandingPage() {
    return (
        <div className={styles.container}>
            <Navbar classes={styles.nav} />
            <div className={styles.invite_body}>
                <div className={styles.invite}>
                    <h1>
                        The <p className={styles.invite_highlight}>Aroma</p> of Indian Local <br></br> Crafts
                    </h1>
                    <ButtonDark text = "Shop Now" classes = {styles.shop_button} />
                </div>
            </div>
            <Divider classes={styles.divider1} />
        </div>
    )
}

export default LandingPage