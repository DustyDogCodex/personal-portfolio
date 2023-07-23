import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

const Link = ({ page, currentPage, setCurrentPage }) => {
    //page names will be capitalised for display. This will convert them to lowercase so they can accurately be compared for conditional rendering. 
    const lowerCasePage = page.toLowerCase()

    return(
        <AnchorLink 
            className={`${currentPage === lowerCasePage ? "text-yellow" : ""} font-robotoMono text-xl  hover:text-yellow transition duration-500 hover:no-underline`} 
            href={`#${lowerCasePage}`}
            onClick={() => setCurrentPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

function Navbar({ currentPage, setCurrentPage }) {
    
    //using state to toggle navbar menu
    const [ menuToggled, setMenuToggled ] = useState(false)

    //checking to see if window is above a small screen with custom hook
    const aboveSmallScreens = useMediaQuery("(min-width: 768px)")

    //determining if navbar is at top of page or not.
    const [topOfPage, setTopOfPage] = useState(true)

    useEffect(() => {
        //using handleScroll to determine if user is browsing top section of the website
        //this is done to control the background color of the navbar. If user scrolls down the website, bg color changes to red
        const handleScroll = () => {
            window.scrollY === 0 ? setTopOfPage(true) : setTopOfPage(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    //setting the navbar background to a different color if it is not on the top of the page
    const navBg = topOfPage ? "" : "bg-red"

    return(
        <nav className={`${navBg} z-40 w-full fixed top-0 py-5`}>
            <div className="flex items-center justify-between m-auto w-5/6">
                <h3 className="font-permanentMarker text-5xl font-bold">VM</h3>

                {/* conditionally rendering navbar dictated by screen size */}
                {aboveSmallScreens ? (
                    /* this is what the navbar will look like for desktops/larger screens */
                    <div className="flex justify-between gap-16 font-roboto text-sm font-semibold">
                        <Link
                            page="Home"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        <Link
                            page="Skills"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        <Link
                            page="Projects"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                        <Link
                            page="Contact"
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                ) : (
                    /* this is what NavBar will look like for smaller screens when menu is toggled off */
                <button
                    className="rounded-full bg-red p-2 flex items-center justify-center"
                    onClick={() => setMenuToggled(true)}
                >
                    <FontAwesomeIcon 
                        icon={faBars} 
                        style={{color: "#f5c211", height:'30px', width:'30px'}} 
                    />
                </button>)}

                {/* when user toggles menu for small/mobile screens */}
                {!aboveSmallScreens && menuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                        <div className="flex justify-end p-10">
                            <button onClick={() => setMenuToggled(!menuToggled)}>
                                <FontAwesomeIcon 
                                    icon={faX} 
                                    style={{color: "#f5c211", height:'30px', width:'30px'}} 
                                />
                            </button>
                        </div>
                        <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
                            <Link
                                page="Home"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Link
                                page="Skills"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Link
                                page="Projects"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                            <Link
                                page="Contact"
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export { Navbar }