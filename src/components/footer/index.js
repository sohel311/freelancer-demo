import { FacebookIcon, InstagramIcon, TwiterIcon } from "../Svg";
import './style.scss';

const FooterComponent = () => {
    return (
        <footer>
            <div className="container">

                <div className="footer_logo_wrapper">
                    <div className="footer_logo">
                        <a href="#">Logo</a>
                    </div>
                    <p>1901 Thornridge Cir. <br />Shiloh, Hawaii <br />81063</p>
                </div>

                <div className="footer_menu_wrapper">
                    {
                        footerMenu.map((item, i) => (
                            <div className="footer_menu" key={i}>
                                <h3>{item.title}</h3>

                                <ul>
                                    {item.menu.map((itm, ind) => <li key={ind}><a href={itm.link}>{itm.text}</a></li>)}
                                </ul>
                            </div>
                        ))
                    }

                    <div className="footer_menu">
                        <h3>Follow Us</h3>
                        
                        <div className="social_icons">
                            <a href="#" target="_blank"><TwiterIcon /></a>
                            <a href="#" target="_blank"><FacebookIcon /> </a>
                            <a href="#" target="_blank"><InstagramIcon /></a>
                        </div>
                    </div>
                </div>

                

            </div>
        </footer>
    )
}

export default FooterComponent;



const footerMenu = [
    {
        title: 'Company',
        menu: [
            {text: 'About Us', link: '/about-us'},
            {text: 'Career', link: '/career'},
            {text: 'Team', link: '/team'},
            {text: 'Contact', link: '/contact'},
        ]
    },
    {
        title: 'Product',
        menu: [
            {text: 'Service', link: '/service'},
            {text: 'Feelancer', link: '/feelancer'},
            {text: 'Features', link: '/features'},
            {text: 'Development', link: '/development'},
        ]
    },
    {
        title: 'Links',
        menu: [
            {text: 'Privacy Policy', link: '/privacy-policy'},
            {text: 'Term & Conditions', link: '/term-and-conditions'},
            {text: 'FAQ', link: '/faq'},
        ]
    },
]