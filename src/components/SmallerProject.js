/* resuable component for displayed smaller projects in the honorable mentions section */

function SmallProject({ name, description, assets }) {
    
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
            <div className="asset">{assetElements}</div>
        </div>
    )
}

export default SmallProject