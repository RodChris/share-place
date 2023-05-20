import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../UIElements/Backdrop'

import './MainNavigation.css'

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const handleDrawerOpen = () => {
        setDrawerIsOpen(true)
    }

    const handleDrawerClose = () => {
        setDrawerIsOpen(false)
    }

    return (
        <Fragment>
            {drawerIsOpen && <Backdrop onClick={handleDrawerClose} />}
            <SideDrawer show={drawerIsOpen} onClick={handleDrawerClose}>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className='main-navigation__menu-btn' onClick={handleDrawerOpen}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">Your Places</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </Fragment>
    )
}

export default MainNavigation