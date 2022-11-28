import { PriceIcon } from "../Svg";
import RatingComponent from "./RatingComponent";

const ProjectCardCompoment = () => {
    return (
        <div className="project_card">
            <div className="project_img">
                <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg" alt="Project" />
            </div>

            <div className="about_project">
                <img src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg" alt="John" />
                <h4>Leslie Alexander</h4>
                <small>View Profile</small>
            </div>

            <div className="project_rating">
                <p>4.9 <RatingComponent value={4.4} /></p>
            </div>
            <div className="project_desc">
                <p>Amet minim mollit non deserunt ullamco est sit.</p>
            </div>

            <div className="project_price">
                <div>
                    <h2><PriceIcon /> 3999</h2>
                    <p>Starting Price</p>
                </div>
                <div>
                    <span className="btn">Select</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardCompoment;