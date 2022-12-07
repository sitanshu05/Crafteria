import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Subtitle from '../../components/Subtitle/Subtitle'
import AccountDetailsField from '../../components/AccountDetailsField/AccountDetailsField'
import ProductCard from '../../components/ProductCard/ProductCard'
import Footer from '../../components/Footer/Footer'
import ButtonDark from '../../components/ButtonDark/ButtonDark'
import { useLocation,useNavigate } from 'react-router-dom'
import data from '../../../tmp/products'
import admin from '../../../tmp/admin'

const styles = {
    accountDetails : "bg-bg_home p-[2rem] w-[100%] flex flex-col gap-16",

}

function Account() {

    const location = useLocation();
    const navigate = useNavigate();
    
    let props = {
        email : "user1@gmail",
        role: "user",
    }
    props = {...props,
            ...location.state.myProps
    }

    const products  = data.map(item =>{
        return <ProductCard {...item} />
    }
    )

    const openAddProduct = () =>{
        navigate('/addproduct')
    }
  return (
    <div>
        <Navbar />
        <Subtitle
            text = "Account Details"
        />
        <div className={styles.accountDetails}>
            <AccountDetailsField
                label = "Email"
                value = {props.email}
            />
            <AccountDetailsField
                label = "Role"
                value = {props.role}
            />
        </div>
        <Subtitle
            text = "Orders"
        />
        <div className='bg-bg_light grid grid-cols-4 col-auto gap-10 px-[3rem] py-[2rem] min-h-[75vh]t'>
            {products}
            
            <ButtonDark 
            text="Add product"
            classes='p-[1rem] text-2xl text-white font-header_font'
            click = {openAddProduct}
        />
        </div>
        <Footer />

    </div>
  )
}

export default Account