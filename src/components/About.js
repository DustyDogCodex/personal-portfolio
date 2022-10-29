function About() {

    const skillSet = ['ReactJS', 'CSS', 'HTML', 'NodeJs', 'Express', 'MongoDB', 'Heroku']

    const skillIcons = skillSet.map((skill,index) => {
        return (<p key={index}>{skill}</p>)
    })

    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p>Hi! My name is Varun and I love creating things for the internet. My love for coding started when I took a computational physics class in college. The class taught me that most of the tedious physics I used to solve by hand could be solved much easily using Python. While I never used the physics again, I did enjoy making programs that made my life significantly easier!</p>
            <p>Fast-forward to today, and now I help make other people's lives easier by bringing their ideas for the internet to life! Whether it be a website for a restaurant, an MMA/fitness gym or a photo gallery, I create websites that allow people to showcase their businesses and talents to the rest of the world!</p>
            <div className="skills">
                <h3>My skills include:</h3>
                {skillIcons}
            </div>
        </div>
    )
}

export default About