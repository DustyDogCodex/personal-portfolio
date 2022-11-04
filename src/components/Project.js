/* styling for div containing displayed projects in the portfolio section. Honorable mentions are in a separate component */
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
                <h2>{name}</h2>
                <div className="summary-top">
                    <p>{description}</p>
                </div>
                <div className="summary-bottom">
                    <div className="asset">{assetElements}</div>
                    <div>Github and Live preview links</div>
                </div>
            </div>
            
            <div className="image">
                <img src={screenshot} alt="screenshot of project" />
            </div>
        </div>
    )
}

export default Project