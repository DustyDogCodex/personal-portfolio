import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import { useState } from "react"

const Link = ({ page, currentPage, setCurrentPage }) => {
    return(
        <AnchorLink 
            className={`${currentPage === page ? "text-yellow" : ""} hover:text-yellow transition duration-500`} 
            href={`#${page}`}
            onClick={() => setCurrentPage(page)}
        >
            {page}
        </AnchorLink>
    )
}

function Navbar({ currentPage, setCurrentPage }) {
    
    //using state to toggle navbar menu
    const [ menuToggled, setMenuToggled ] = useState(false)

    //checking for small screens with custom hooks
    const aboveSmallScreens = useMediaQuery("(min-width: 768px)")

    return(
        <nav className={`z-40 w-full fixed top-0 py-5`}>
            <div className="flex items-center justify-between m-auto w-5/6">
                <h3 className="font-permanentMarker text-5xl font-bold">VM</h3>

                {/* this is what the navbar will look like for desktops/larger screens */}
                {aboveSmallScreens ? (
                    <div className="flex justify-between gap-16 font-roboto text-sm font-semibold">
                        <Link
                            page="home"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        ></Link>
                    </div>
                ) : (<div></div>)}
            </div>
        </nav>
    )
}

export default Navbar