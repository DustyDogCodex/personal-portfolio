import Project from "./Project"

function Portfolio() {

    const projectList = [
        {
        name: 'Tenzies', 
        description: 'A recreation of the popular game Tenzies, where the first player to roll the same 10 digits with 10 different die wins.',
        assets: ['ReactJS', 'CSS', 'HTML'],
        links: {github: '#', live: '#'},
        screenshot: 'image url goes here!'
        },
        {
        name: 'Meme Maker 9000', 
        description: 'A simple web app that allows users to select an image from a collection of the 100 most popular memes from the imgflip API and put text over the images.',
        assets: ['ReactJS', 'CSS', 'imgflip API'],
        links: {github: '#', live: '#'},
        screenshot: 'image url goes here!'
        },
        {
        name: 'Brise Weather App', 
        description: 'A web app that finds a user\'s current location and display a 24hr, a 7 day and an hourly weather forecast for that location.',
        assets: ['JavaScript', 'CSS', 'OpenMeteo API'],
        links: {github: '#', live: '#'},
        screenshot: 'image url goes here!'
        }
    ]

    const projectElements = projectList.map((proj,index) => {
        return (
            <Project key={index} name={proj.name} description={proj.description} assets={proj.assets}/>
        )
    })

    return (
        <div className="portfolio">
            <div className="main-showcase">
                <h2 className="heading">Portfolio</h2>
                {projectElements}
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