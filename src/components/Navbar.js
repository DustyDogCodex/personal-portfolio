function Navbar() {

    const navItems = ['Home', 'About/Skills', 'Projects', 'Contact', 'Github/Socials']

    const navElements = navItems.map(el => {
        return (<div className="nav-items">{el}</div>)
    })

    return (
        <nav className="navbar">
            <span className="name">Varun Malaviya</span>
            {navElements}
        </nav>
    )
}

export default Navbar