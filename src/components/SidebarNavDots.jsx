import AnchorLink from "react-anchor-link-smooth-scroll"

function SidebarNavDots({ currentPage, setCurrentPage }){
    //styling the dots that are currently selected
    const selectedDot = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`
    
    return(
        <div className="flex flex-col gap-5 fixed top-[60%] right-7">
            <AnchorLink 
                className={`${currentPage === 'home' ? selectedDot : "bg-dark-grey"} w-3 h-3 rounded-full`} 
                href="#home"
                onClick={() => setCurrentPage('home')}
            />
            <AnchorLink 
                className={`${currentPage === 'skills' ? selectedDot : "bg-dark-grey"} w-3 h-3 rounded-full`} 
                href="#skills"
                onClick={() => setCurrentPage('skills')}
            />
            <AnchorLink 
                className={`${currentPage === 'projects' ? selectedDot : "bg-dark-grey"} w-3 h-3 rounded-full`} 
                href="#projects"
                onClick={() => setCurrentPage('projects')}
            />
            <AnchorLink 
                className={`${currentPage === 'testimonials' ? selectedDot : "bg-dark-grey"} w-3 h-3 rounded-full`} 
                href="#testimonials"
                onClick={() => setCurrentPage('testimonials')}
            />
            <AnchorLink 
                className={`${currentPage === 'contact' ? selectedDot : "bg-dark-grey"} w-3 h-3 rounded-full`} 
                href="#contact"
                onClick={() => setCurrentPage('contact')}
            />
        </div>
    )
}

export { SidebarNavDots }