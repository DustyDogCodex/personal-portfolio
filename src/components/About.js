import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"

function About() {

    /* array of skills and respective icons from Font Awesome Library */
    /* FOnt awesome doesn't have icons for Heroku, Mongodb and Express so I just used the closest icons that represent them lol */
    const skillSet = [
        { 
            lang: 'JavaScript',
            icon: faJs
        },
        { 
            lang: 'ReactJs',
            icon: faReact
        },
        { 
            lang: 'CSS',
            icon: faCss3
        },
        { 
            lang: 'HTML',
            icon: faHtml5
        },
        { 
            lang: 'NodeJs',
            icon: faNodeJs
        },
        { 
            lang: 'Express',
            icon: faNodeJs
        },
        { 
            lang: 'MongoDb',
            icon: faCloudArrowUp
        },
        { 
            lang: 'Heroku',
            icon: faCloudArrowUp
        },
    ]

    /* mapping skills into an array of p elements containing a programming lang and its respective icon from font awesome library. */
    const skillIcons = skillSet.map((skill,index) => {
        return (<p key={index}>
            <FontAwesomeIcon icon={skill.icon} style={{color: "#f2df07",}}/> {skill.lang}
            </p>)
    })

    return (
        <div className="about-me">
            <h2 className="heading">About Me</h2>
            <p>Hi! My name is Varun and I love creating things for the internet. My love for coding started when I took a computational physics class in college. The class taught me that most of the tedious physics I used to solve by hand could be solved much easily using Python. While I never used the physics again, I did enjoy making programs that made my life significantly easier!</p>
            <p>Fast-forward to today, and now I help make other people's lives easier by bringing their ideas for the internet to life! Whether it be a website for a restaurant, an MMA/fitness gym or a photo gallery, I create websites that allow people to showcase their businesses and talents to the rest of the world!</p>
            <h3 className="heading">My skills include:</h3>
            <div className="skills">
                {skillIcons}
            </div>
        </div>
    )
}

export default About