/* styling for div containing displayed projects in the portfolio section. Honorable mentions are in a separate component */
function Project({ name, description }) {
    return (
        <div className="project">
            <div className="summary">
                <h3>{name}</h3>
                <p>{description}</p>
                <div>assets</div>
                <div>Github and Live preview links</div>
            </div>
            <div className="image">
                img element containing a screenshot. Will have a filter that will be removed once user hovers on the image!
            </div>
        </div>
    )
}

export default Project