

import './projects.css';

function Projects({name, description, github}){



    return(
        <div id = "project">


            <div className = "project">
                <h4>{name}</h4>
                <p>{description}</p>
            <a target="_blank" href={github}><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt ="github icon" /> GitHub</button></a>
            </div>
        </div>
    )
}
export default Projects;