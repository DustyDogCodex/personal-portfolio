import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    //watching for when screen hits a partiuclar media breakpoint so the website can respond to it.
    const [matches, setMatches] = useState(false)

    useEffect(() => {

        const media = window.matchMedia(query)

        if( media.matches !== matches){
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        
        window.addEventListener("resize", listener)

        return () => window.removeEventListener("resize", listener)
    }, [matches, query])

    return matches
}

export default useMediaQuery