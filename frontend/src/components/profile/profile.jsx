import './profile.css'
/*import ProfileIcon from '../../assets/profile-icon.png' */
import profile_picture from '../../assets/profile_picture.jpeg'

 function Profile() {


    return(

        <div id={"profile"}>
            <div id = "profile_picture"><img width = "250" src = {profile_picture} alt="profile picture"/></div>

            <div id = "profile-text">
                <h3>Hello, I am</h3>
                <h2>Nicholas Zhang</h2>
                <p>Boston University Student</p>
                <div className="icons">
                    <a target="_blank" href="https://linkedin.com/in/nicholas-zhang-376574225"><img id="linkedin-img" width="60" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
                    <a target="_blank" href="https://github.com/nzhan01"><img id="github-img" width="60" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
                </div>
            </div>

        </div>
    )
}
export default Profile;
