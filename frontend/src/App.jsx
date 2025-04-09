
import './components/navbar/navbar.css'
import Navbar from './components/navbar/navbar.jsx'
import './App.css'
import Profile from "./components/profile/profile.jsx";
import './components/profile/profile.css'
import Projects from './components/projects/projects.jsx';
import './components/projects/projects.css';
import Experiences from './components/experiences/experiences.jsx'
import About from './components/about/about.jsx'
import Chat from './components/chat/chat.jsx'
function App() {
    return (
        
        <>
            <Navbar/>
            <Profile/>



            <About/>
            <Chat/>
            <div id ="projects">
                <h2>Projects</h2>
                <Projects name ="Movie_Max App" description ="Interactive movie watchlist maker" github="https://github.com/nzhan01/movie_max_app/tree/final"/>
                <Projects name = "Movie info App" description = "Get movie information using the OMDB" github="https://github.com/nzhan01/mp-4"/>
                <Projects name ="Valentines Card" description ="Interactive valentines card" github="https://github.com/nzhan01/JDT-spring-25-alpha/tree/main/workspace/valentines"/>
                <Projects name ="Memory Box" description = "Personal memory scrapbook for my Deaf Literature class" github="https://github.com/nzhan01/de351midterm1"/>

            </div>

            <div id="exp">
                <h2>Work Experience</h2>
                <Experiences
                    title = "NS201 Biology Teaching Assistant"
                    info = "Boston University, Boston, MA"
                    dates = "5/2024 - Present"
                    bullets={[
                        "Collaborated with five professors to design, implement, instruct, and evaluate laboratory sessions",
                        "Resided over multiple weekly biology lab activities for over 60 students",
                        "Tutored students during weekly office hours"]}/>
                <Experiences
                    title = "ASL Language Link Facilitator"
                    info = "Boston University Wheelock College, Boston, MA"
                    dates = "2/2025 - Present"
                    bullets={[
                        "Worked with two Deaf Studies professors to develop weekly lesson plans",
                        "Lead weekly tutoring sessions in American Sign Language"]}/>
            </div>

        </>
    )
}

export default App