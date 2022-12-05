import React from 'react'
import Logo from '../Logo/Logo'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiAccountCircleLine} from 'react-icons/ri'

const styles = {
    container : "bg-bg_light flex justify-between p-[1rem] w-full",
    logo_div: "",
    logo : "h-[5rem]",
    link_div:"",
    links : "flex gap-7 items-end h-full text-2xl font-header_font italic text-white ",
    link : "",
    icons_div : "",
    icon_links : "flex gap-6 items-top h-full ",

}

function Navbar(props) {
  return (
    <div className={styles.container}>
        <div className={styles.logo_div}>
            <Logo classes={styles.logo}/>
        </div>
        <div className={styles.link_div}>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="">Jewellery</a>
                </li>
                <li className={styles.link}>
                    <a href="">Decorations</a>
                </li>
                <li className={styles.link}>
                    <a href="">Artists</a>
                </li>
                <li className={styles.link}>
                    <a href="">About Us</a>
                </li>
            </ul>
        </div>
        <div className={styles.icons_div}>
                <ul className={styles.icon_links}>
                    <li>
                        <a href="">
                            <AiOutlineShoppingCart style = {{color: "white"}} size='2rem'/>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <RiAccountCircleLine style = {{color: "white" }} size='2rem' />
                        </a>
                    </li>
                </ul>
        </div>
    </div>
  )
}

export default Navbar