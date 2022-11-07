/* resuable component for displayed smaller projects in the honorable mentions section */

function SmallProject({ name, description, assets }) {
    
    /* mapping the assets into individual divs to be displayed */
    const assetElements = assets.map((el,index) => {
        return(
            <div key={index}>{el}</div>
        )
    })

    return (
        <div className="smaller-project">
            <h4>{name}</h4>
            <p>{description}</p>
            {assetElements}
        </div>
    )
}

export default SmallProject