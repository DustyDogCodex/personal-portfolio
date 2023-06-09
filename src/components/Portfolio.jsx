import Project from "./Project"
import SmallProject from "./SmallerProject"
import { motion } from "framer-motion"

function Portfolio() {

    //an array containing a list of featured projects to be displayed (stored as objects)
    const projectList = [
        {
        name: 'Tenzies', 
        description: 'A recreation of the popular game Tenzies, where the first player to roll the same 10 digits with 10 different dice wins.',
        assets: ['ReactJS', 'CSS', 'HTML'],
        links: {github: 'https://github.com/DustyDogCodex/Tenzies', live: 'https://dustydogcodex.github.io/Tenzies/'},
        screenshot: './Images/tenzies.png'
        },
        {
        name: 'Meme Maker 9000', 
        description: 'A simple web app that allows users to select an image from a collection of the 100 most popular memes from the imgflip API and put text over the images.',
        assets: ['ReactJS', 'CSS', 'imgflip API'],
        links: {github: 'https://github.com/DustyDogCodex/Meme-Maker-9000', live: 'https://dustydogcodex.github.io/Meme-Maker-9000/'},
        screenshot: './Images/meme-maker-9000.png'
        },
        {
        name: 'Brise Weather App', 
        description: 'A web app that uses your current location to display an hourly, a 24hr, and a 7 day weather forecast for that location.',
        assets: ['JavaScript', 'CSS', 'OpenMeteo API'],
        links: {github: 'https://github.com/DustyDogCodex/Brise-Weather-App', live: 'https://dustydogcodex.github.io/Brise-Weather-App/'},
        screenshot: './Images/brise.png'
        }
    ]

    const projectElements = projectList.map((proj,index) => {
        return (
            <Project key={index} name={proj.name} description={proj.description} assets={proj.assets} screenshot={proj.screenshot} links={proj.links}/>
        )
    })

    /* an array containing smaller projects to be displayed in the honorable mentions section. */
    const honorableMentionsList = [
        {
            name: 'AirBnB Clone',
            description: 'A simple clone of the Airbnb frontend, built using ReactJS',
            assets: ['ReactJs', 'CSS', 'HTML'],
            links: {github: 'https://github.com/DustyDogCodex/AirBnB-Clone', live: 'https://dustydogcodex.github.io/AirBnB-Clone/'}
        },
        {
            name: 'Odin Landing Page',
            description: 'A landing page for a fictional website, created using CSS and HTML.',
            assets: ['CSS', 'HTML'],
            links: {github: 'https://github.com/DustyDogCodex/Odin_LandingPage', live: 'https://dustydogcodex.github.io/Odin_LandingPage/'}
        },
        {
            name: 'Admin Dashboard',
            description: 'Recreating the frontend dashboard for a fictional app using CSS grid',
            assets: ['CSS', 'HTML'],
            links: {github: 'https://github.com/DustyDogCodex/admin-dashboard', live: 'https://dustydogcodex.github.io/admin-dashboard/'}
        }
    ]

    const honorableMentionsElements = honorableMentionsList.map((el,index) => {
        return(<SmallProject key={index} name={el.name} description={el.description} assets={el.assets} links={el.links}/>)
    })

    return (
        <section
            id="portfolio" 
            className="p-20">
            <div className="main-showcase">
                <h2 className="heading">Recent Projects</h2>
                {projectElements}
            </div>
            <div className="honorable-mentions">
                <h3 className="sub-heading">Honorable Mentions</h3>
                <div className="small-project-display">
                    {honorableMentionsElements}
                </div>
            </div>
        </section>
    )
}

export { Portfolio }