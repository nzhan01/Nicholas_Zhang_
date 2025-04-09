import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'

import {useState} from 'react'

function About() {
    const [display, setDisplay] = useState('block')

    const [buttonText, setButtonText] = useState('Hide')

    function toggle(){
        if (display === 'none'){
            setDisplay('block')
            setButtonText('Hide')
        }
        else{
            setDisplay('none')
            setButtonText('Show')
        }

    }

    return (
        <div id = "about">
            <h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
                About Me
            </h2>
            <div style = {{display: display}}>
                <p>
                    I am a 3rd year student at Boston University studying Computer Science with a minor in Deaf Studies. I am interested
                    in web development and cybersecurity. In my free time, I like to play volleyball, rock climb, cook, and hike.
                </p>
                <br/>
                <h3>My Skills</h3>
                <div className="icons">
                    <img width = "60" src={CSS} alt="CSS"/>
                    <img width = "60" src={HTML} alt="HTML"/>
                    <img width = "60" src={JS} alt="JS"/>
                    <img width = "60" src={PY} alt="JS"/>
                </div>
                <br/>
                <h3>My Resume</h3>
                <div className ="resumeLink">
                    <a href={"https://docs.google.com/document/d/1hxW1J9Q8j9bjLYma069H-1XhAxrpt-G7ocioomP7XUA/edit?tab=t.0"}>Resume</a>
                </div>
            </div>
        </div>


    )

}


export default About;
