/* styling for div containing displayed projects in the portfolio section. Honorable mentions are in a separate component */
function Project({ name, description, assets }) {

    const assetElements = assets.map(asset => {
        return (
            <span>{asset}</span>
        )
    })

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
                img element containing a screenshot. Will have a filter that will be removed once user hovers on the image!
            </div>
        </div>
    )
}

export default Project