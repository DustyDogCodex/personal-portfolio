/* resuable component for displayed smaller projects in the honorable mentions section */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"

function SmallProject({ name, description, assets, links }) {
    
    /* mapping the assets into individual divs to be displayed */
    const assetElements = assets.map((el,index) => {
        return(
            <span key={index}>{el} </span>
        )
    })

    return (
        <div className="small-project">
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="asset">
                {assetElements}
            </div>
            <div className="links">
                <a href={links.github} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{color: "grey", height:'20px'}}/></a>
                <a href={links.live} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLink} style={{color: "grey", height:'20px'}}/></a>
            </div>
        </div>
    )
}

export default SmallProject