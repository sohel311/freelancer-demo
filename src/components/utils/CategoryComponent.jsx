import { useEffect, useState } from "react";
import { LeftArrowIcon, RightArrowIcon } from "../Svg";



const CategoryComponent = () => {
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState(0);


    useEffect(() => {
        const temp = _categories.slice(activeCat, activeCat + 7);
        console.log(temp, 'temptemptemptemp');
        setCategories(temp);

    }, [activeCat])


    return (
        <div className="categories_bar">
            <div className="container">
                {activeCat > 0 ? <div className="prev_btn" onClick={() => setActiveCat(activeCat - 1)}><LeftArrowIcon /></div> : ''}
                
                <ul>
                    {
                        categories.map(item => (
                            <li>
                                <p>{item.name}</p>

                                <ul>
                                    {
                                        item.subCategories.map(itm => (
                                            <li><a href={itm.url}>{itm.text}</a></li>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }
                </ul>
                {activeCat != (_categories.length - 7) ? <div className="next_btn" onClick={() => setActiveCat(activeCat + 1)}><RightArrowIcon /></div> : ''}
                
            </div>
        </div>
    )
}

export default CategoryComponent;




const _categories = [
    {
        name: 'Programming & Tech',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Design & Art',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Writing & Translation',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'SEO & Digital Marketting',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Music & Audio',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Video & Animation',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Business & Sales',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Programming & Tech',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Design & Art',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Writing & Translation',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'SEO & Digital Marketting',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Music & Audio',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Video & Animation',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },
    {
        name: 'Business & Sales',
        subCategories: [
            {text: 'Option 1', url: '/option'},
            {text: 'Option 2', url: '/option'},
            {text: 'Option 3', url: '/option'},
            {text: 'Option 4', url: '/option'},
            {text: 'Option 5', url: '/option'},
            {text: 'Option 6', url: '/option'},
        ]
    },

]

