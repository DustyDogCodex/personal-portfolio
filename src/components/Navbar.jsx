function Navbar() {

    const navItems = ['Home', 'About','Portfolio', 'Contact']

    const navElements = navItems.map((item,index) => {
        return (<div key={index} className="nav-items">{item}</div>)
    })

    return(
        <div className="navbar">
            <div className="nav-name">Varun Malaviya</div>
            <div className="nav-right">
                {navElements}
            </div>
        </div>
    )
}

export default Navbar