import Project from "./Project"

function Portfolio() {

    const projectList = [
        {
        name: 'Tenzies', 
        description: 'A recreation of the popular game Tenzies, where the first player to roll the same 10 digits with 10 different die wins.',
        assets: ['ReactJS', 'CSS', 'HTML'],
        links: {github: '#', live: '#'},
        screenshot: 'image url goes here!'
        }
    ]

    const projectElements = projectList.map((proj,index) => {
        return (
            <Project key={index} name={proj.name} description={proj.description}/>
        )
    })

    return (
        <div className="portfolio">
            <div className="main-showcase">
                <h2 className="heading">Portfolio</h2>
                {projectElements}
                <li>Meme Generator</li>
                <li>Tenzies Game</li>
                <li>Airbnb Clone</li>
            </div>
            <div className="honorable-mentions">
                <h3 className="heading">Honorable Mentions</h3>
                <li>Restaurant Page</li>
                <li>MMA website</li>
                <li>Hair salon</li>
            </div>
        </div>
    )
}

export default Portfolio