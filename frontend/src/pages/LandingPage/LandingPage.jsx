import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import Divider from '../../components/Divider/Divider'
import Subtitle from '../../components/Subtitle/Subtitle'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../../tmp/products'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const styles = {
    container: "bg-contain bg-bg_home flex flex-col items-center justify-start bg-no-repeat font-header_font text-white text-center",
    nav: "",
    invite_body: "",
    invite: "font-header_font text-white text-center text-7xl bg-bg_light mt-[3rem] p-[6rem] rounded-[30px] flex flex-col items-center justify-around h-full gap-10",
    text_highlight: "inline italic",
    shop_button: "text-[2rem] p-[0.5rem]",
    divider1: "mt-[12rem]",
    about_div: "bg-bg_medium w-full flex flex-col p-[8rem] mt-[0.65rem]",
    about: "bg-bg_historical bg-cover bg-no-repeat text-7xl p-[6rem] rounded-[30px]",
    about_sub: "bg-bg_dark rounded-[30px] p-[6rem]",
    featured: "flex w-full justify-around bg-bg_medium pt-[10rem] h-[80vh]"

}

function LandingPage() {

    const navigate = useNavigate()
    const clickHandler = () =>{
        navigate('/products')
    }

    const featuredProducts = data.map(item => {
        return <ProductCard {...item} />
    })
    return (
        <div className={styles.container}>
            <Navbar classes={styles.nav} />
            <div className={styles.invite_body}>
                <div className={styles.invite}>
                    <h1>
                        The <p className={styles.text_highlight}>Aroma</p> of Indian Local <br></br> Crafts
                    </h1>
                    <ButtonDark text="Shop Now" classes={styles.shop_button} click = {clickHandler}/>
                </div>
            </div>
            <Divider classes={styles.divider1} />
            <div className={styles.about_div}>
                <div className={styles.about}>
                    <div className={styles.about_sub}>
                        Take Home <p className={styles.text_highlight}>Essence</p> Of Historical Handicrafts
                    </div>
                </div>
            </div>
            <Subtitle
                text="Enjoy our featured products"
            />
            <div className={styles.featured}>
                {featuredProducts}
            </div>
            <Footer classes="w-full"/>
        </div>
    )
}

export default LandingPage