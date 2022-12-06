import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Subtitle from '../../components/Subtitle/Subtitle'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../../tmp/products'

const styles = {
    container : "bg-bg_medium",
    subtitle :"",
    body : "grid grid-cols-4 mt-[1rem] col-auto gap-10 px-[3rem] py-[2rem] min-h-[75vh]"

}

function Products() {

        const Products = data.map(item => {
            return <ProductCard {...item} />
        })

    return (
        <div className={styles.container}>
            <Navbar />
            <Subtitle
                text="Products"
                classes = {styles.subtitle}
            />
            <div className={styles.body}>
                {Products}
            </div>
        </div>
    )
}

export default Products