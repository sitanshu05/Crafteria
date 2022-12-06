import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { ROUTES } from './RouterConfig'
import LandingPage from '../pages/LandingPage/LandingPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Products from '../pages/Products/Products'
import ProductPage from '../pages/ProductPage/ProductPage'
import Account from '../pages/Account/Account'
import Cart from '../pages/Cart/Cart'
import AddProduct from '../pages/AddProduct/AddProduct'

const Router = () => {

    const RouteWithRole = ( {Element} ) => {
        return(
            <>
                <Element />
            </>
        )
    }

    return (
        <div>
            <Routes>
                <Route exact path ={ROUTES.LandingPage} element = {<RouteWithRole Element={LandingPage} />}></Route>
                <Route exact path ={ROUTES.Login} element = {<RouteWithRole Element={Login} />}></Route>
                <Route exact path ={ROUTES.SignUp} element = {<RouteWithRole Element={SignUp} />}></Route>
                <Route exact path ={ROUTES.Products} element = {<RouteWithRole Element={Products} />}></Route>
                <Route exact path ={ROUTES.ProductPage} element = {<RouteWithRole Element={ProductPage} />}></Route>
                <Route exact path ={ROUTES.account} element = {<RouteWithRole Element={Account} />}></Route>
                <Route exact path ={ROUTES.cart} element = {<RouteWithRole Element={Cart} />}></Route>
                <Route exact path ={ROUTES.addProduct} element = {<RouteWithRole Element={AddProduct} />}></Route>
            </Routes>
        </div>
    )
}

export default Router