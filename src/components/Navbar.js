import React, { useState } from "react"

function Navbar() {

    const navItems = ['Home', 'About/Skills', 'Projects', 'Contact', 'Github/Socials']

    const navElements = navItems.map(el => {
        return (<div className="nav-items">{el}</div>)
    })

    //using useState to change visibility of the menu upon being clicked
    const [hamburger, setHamburger] = useState('hamburger stacked')
    const [menu, setMenu] = useState('menu hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    //toggle hamburger menu animation from stacked to crossed
    function clickedMenu() {
        if(!isMenuClicked) {
           setHamburger('hamburger crossed')
           setMenu('menu visible') 
        } else {
            setHamburger('hamburger stacked')
            setMenu('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <nav className='navbar'>

            <div className='hamburger-menu' onClick={clickedMenu}>
                <div className={hamburger} ></div>
                <div className={hamburger} ></div>
                <div className={hamburger} ></div>
            </div>

            <span className="name">Varun Malaviya</span>
            {navElements}
        </nav>
    )
}

export default Navbar