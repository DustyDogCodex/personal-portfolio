/* styling for div containing displayed projects in the portfolio section. Honorable mentions are in a separate component */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"


function Project({ name, description, assets, screenshot }) {

    const assetElements = assets.map(asset => {
        return (
            <span>{asset}</span>
        )
    })

    console.log(screenshot)

    return (
        <div className="project">

            <div className="summary">
                <h2 className="project-title"><em>{name}</em></h2>
                <div className="summary-top">
                    <p>{description}</p>
                </div>
                <div className="summary-bottom">
                    <div className="asset">
                        {assetElements}
                    </div>
                    <div className="links">
                        <FontAwesomeIcon icon={faGithub} style={{color: "grey", height:'20px'}}/>
                        <FontAwesomeIcon icon={faExternalLink} style={{color: "grey", height:'20px'}}/>
                    </div>
                </div>
            </div>
            
            <div className="image">
                <img src={screenshot} alt="screenshot of project" />
            </div>
        </div>
    )
}

export default Project