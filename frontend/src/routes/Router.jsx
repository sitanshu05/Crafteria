import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { ROUTES } from './RouterConfig'
import LandingPage from '../pages/LandingPage/LandingPage'

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
            </Routes>
        </div>
    )
}

export default Router