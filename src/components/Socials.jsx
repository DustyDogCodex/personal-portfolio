import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Socials(){
    return(
        <div
            className="mx-5 flex justify-center md:justify-start my-10 gap-7" 
        >
            <a 
                href="https://twitter.com/VarunMalaviya2"
                target="_blank"
                rel='noopener noreferrer' 
                className="hover:scale-125"  
            >
                <FontAwesomeIcon 
                    icon={faTwitter} 
                    style={{color:'blue', height:'30px', width:'30px'}}
                />
            </a>
            <a 
                href="https://github.com/DustyDogCodex"
                target="_blank"
                rel='noopener noreferrer' 
                className="hover:scale-125"  
            >
                <FontAwesomeIcon 
                    icon={faGithub} 
                    style={{color:'white', height:'30px', width:'30px'}}
                />
            </a>
            <FontAwesomeIcon 
                className="hover:scale-125"
                icon={faEnvelope} 
                style={{color:'gold', height:'30px', width:'30px', cursor:'pointer'}}
                onClick={() => window.location = 'mailto:varunmalaviya7@gmail.com'}
            />
            <a 
                href="https://www.linkedin.com/in/varun-malaviya-012677108/"
                target="_blank"
                rel='noopener noreferrer'  
                className="hover:scale-125" 
            >
                <FontAwesomeIcon 
                    icon={faLinkedin} 
                    style={{color:'green', height:'30px', width:'30px'}}
                />
            </a>
        </div>
    )
}

export { Socials }