import { FilterIcon } from "../../components/Svg";
import CategoryComponent from "../../components/utils/CategoryComponent";
import ProjectCardCompoment from "../../components/utils/ProjectCardCompoment";
import ProjectFilterComponent from "../../components/utils/ProjectFilterComponent";
import SectionHeaderComponent from "../../components/utils/SectionHeaderComponent";

const ProjectsPage = () => {

    const toggleFilterTab = () => {
        document.body.classList.toggle('filter_open')
    }

    return (
        <div className="page_wrapper">
            <CategoryComponent />
            <SectionHeaderComponent />
            
            <ProjectFilterComponent />

            <div className="container">

                <div className="show_mobile">
                    <span className='btn_outline_dark' onClick={toggleFilterTab}><FilterIcon /> Filter</span>
                </div>

                <div className="">
                    <p>320 Search Result</p>
                </div>

                <div className="projects_wrapper">
                    {
                        list.map((item, i) => <ProjectCardCompoment key={i} data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;



const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]