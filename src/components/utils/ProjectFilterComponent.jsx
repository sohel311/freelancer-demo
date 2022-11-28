import Select from 'react-select';
import { FilterIcon } from '../Svg';
import RatingComponent from './RatingComponent';

const ProjectFilterComponent = () => {

    const toggleFilterTab = () => {
        document.body.classList.toggle('filter_open')
    }

    return (
        <div className="filters_wrapper">
            <div className="container hide_mobile">
                <div className="filters_inner_wrapper">
                    <div className='form_group_wrap'>
                        {
                            filtersOptions.map((item, i) => (
                                <div className='form_group' key={i}>
                                    <label>{item.title}</label>
                                    <Select
                                        classNamePrefix='cm_select'
                                        placeholder={item.placeholder}
                                        options={item.option.map(i => ({ label: i, value: i }))} />
                               </div>
                           )) 
                        }

                        <div className='filter_actions'>
                            <span>Clear Filter</span>
                            <span className='btn'>Apply</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='fiter_overlay' onClick={toggleFilterTab}></div>


            <div className='show_mobile filter_sidebar_wrapper'>

                <h3>Category</h3>

                <ul>
                    {
                        _categoryList.map((item, i) => (
                            <li key={i}><span className='cm_checkbox'><input type="checkbox" /></span> {item}</li>
                        ))
                    } 
                </ul>

                <span className='seeMore'>See More</span>


                <h3>Sub-Category</h3>

                <ul>
                    {
                        _categoryList.length ? _categoryList.map((item, i) => (
                            <li key={i}><span className='cm_checkbox'><input type="checkbox" /></span> {item}</li>
                        )) : <li className='not_selected'>Category Not Selected</li>
                    } 
                </ul>


                <h3>Rating</h3>

                <p>Top Rated</p>

                <ul>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 4+<RatingComponent value={4.4} /> </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 3+<RatingComponent value={4.4} /> </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 2+<RatingComponent value={4.4} /> </li>
                </ul>

                <h3>Pricing</h3>

                <p>Low Price To High Price</p>

                <ul>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 8000 to 10000 </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 6000 to 8000 </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 4000 to 6000 </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 2000 to 4000 </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> Less than 2000 </li>
                </ul>


                <h3>Delivery Time</h3>

                <ul>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 2hrs to 4hrs </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 5hrs to 7hrs </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 1day to 2day </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> 2day to 4day </li>
                </ul>

                <h3>Country</h3>

                <ul>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> USA </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> UK </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> INDIA </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> PAKISTAN </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> BANGLADESH </li>
                    <li><span className='cm_checkbox'><input type="checkbox" /></span> NEPAL </li>
                </ul>

                <span className='seeMore'>See More</span>

                <div className='filter_actions'>
                    <span>Clear Filter</span>
                    <span className='btn'>Apply</span>
                </div>

            </div>
        </div>
    )
}

export default ProjectFilterComponent;

const _categoryList = [
    'Programming & Tech',
    'Design & Art',
    'Writing & Translation',
    'SEO & Digital Marketting',
    'Music & Audio'
]
const _subCategoryList = []


const filtersOptions = [
    {
        title: 'Category',
        placeholder: 'Select Category',
        option: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
    },
    {
        title: 'Sub-Category',
        placeholder: 'Select Sub Category',
        option: ['Sub Category 1', 'Sub Category 2', 'Sub Category 3', 'Sub Category 4', 'Sub Category 5']
    },
    {
        title: 'Delivery Time',
        placeholder: 'Select Time',
        option: ['Delivery Time 1', 'Delivery Time 2', 'Delivery Time 3', 'Delivery Time 4', 'Delivery Time 5']
    },
    {
        title: 'Country',
        placeholder: 'Select Country',
        option: ['Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5']
    },
    {
        title: 'Post Day',
        placeholder: 'Select Day',
        option: ['Post Day 1', 'Post Day 2', 'Post Day 3', 'Post Day 4', 'Post Day 5']
    },
    {
        title: 'Pricing',
        placeholder: 'Select Pricing',
        option: ['Pricing 1', 'Pricing 2', 'Pricing 3', 'Pricing 4', 'Pricing 5']
    },
]