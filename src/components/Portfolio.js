import Project from "./Project"
import SmallProject from "./SmallerProject"

function Portfolio() {

    //an array containing a list of featured projects to be displayed (stored as objects)
    const projectList = [
        {
        name: 'Tenzies', 
        description: 'A recreation of the popular game Tenzies, where the first player to roll the same 10 digits with 10 different dice wins.',
        assets: ['ReactJS', 'CSS', 'HTML'],
        links: {github: '#', live: '#'},
        screenshot: './Images/tenzies.png'
        },
        {
        name: 'Meme Maker 9000', 
        description: 'A simple web app that allows users to select an image from a collection of the 100 most popular memes from the imgflip API and put text over the images.',
        assets: ['ReactJS', 'CSS', 'imgflip API'],
        links: {github: '#', live: '#'},
        screenshot: './Images/meme-maker-9000.png'
        },
        {
        name: 'Brise Weather App', 
        description: 'A web app that uses your current location to display an hourly, a 24hr, and a 7 day weather forecast for that location.',
        assets: ['JavaScript', 'CSS', 'OpenMeteo API'],
        links: {github: '#', live: '#'},
        screenshot: './Images/brise.png'
        }
    ]

    const projectElements = projectList.map((proj,index) => {
        return (
            <Project key={index} name={proj.name} description={proj.description} assets={proj.assets} screenshot={proj.screenshot}/>
        )
    })

    /* an array containing smaller projects to be displayed in the honorable mentions section. */


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