import { NavLink } from "react-router-dom";
import { ChatLineIcon, DwonArrowIcon, LikeLineIcon, OrderLineIcon, PaymentLineIcon, UserLineIcon, UserLineIcon2 } from "../Svg";
import SearchComponent from "../utils/SearchComponent";
import './style.scss';

const HeaderComponent = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <a href="#">Logo</a>
                </div>

                {/* <div className="menu_toggle">
                    <MenuIcon />
                </div> */}

                <div className="menu_primary">
                    <SearchComponent />

                    <ul>
                        <li><a href="/project">Post Project</a></li>
                        <li><a href="/search">Search Project</a></li>
                    </ul>

                    <div className="bage_wrapper">
                        <div>
                            <span>4</span>
                            <ChatLineIcon />
                        </div>
                        <div>
                            <span>5</span>
                            <LikeLineIcon />
                        </div>
                    </div>

                    <div className="profile_dropdown">
                        <div className="user_img">
                            <img src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg" alt="John" />
                        </div>
                        <DwonArrowIcon />
                      

                        <ul>
                            <li><a><UserLineIcon2 />Profile</a></li>
                            <li><a><PaymentLineIcon />Payments</a></li>
                            <li><a><OrderLineIcon />Order</a></li>
                            <li><a><UserLineIcon2 />Profile</a></li>
                            <li><a><UserLineIcon2 />Profile</a></li>
                            <li><a><UserLineIcon2 />Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;