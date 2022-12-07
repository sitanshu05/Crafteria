import React from 'react'
import { useNavigate } from 'react-router-dom'

const styles = {
    card: "h-[15rem] w-[20rem] bg-bg_dark p-[1rem] flex flex-col items-center justify-between rounded-[30px] text-xl text-white",
    img_div : "h-[80%] w-[80%]",
    image: "max-h-full max-w-full h-full w-full rounded-[20px]",
    about_div : "flex justify-between w-full",
    title: "",
    price: ""

}

function ProductCard(props) {

    const navigate = useNavigate()

    const showProduct = () =>{
        navigate("/productpage",{state : {
                myProps : props
            }})
    }
    return (
        <div className={styles.card} onClick={showProduct}>
            <div className={styles.img_div}>
                <img src={props.img} alt={props.alt} className={styles.image} />
            </div>
            <div className={styles.about_div}>
                <div className={styles.title}>
                    <p>{props.title}</p>
                </div>
                <div className={styles.price}>
                    {'\u20A8 '}<p className='inline'>{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard