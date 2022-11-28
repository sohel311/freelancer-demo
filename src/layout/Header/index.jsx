import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Message } from "../../assets/images/message.svg";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import { ReactComponent as DownArrow } from "../../assets/images/down_arrow_coloered.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="container_left">
          <div className="container_left_logo">
            <div>Logo</div>
          </div>
        </div>
        <div className="container_right">
          <div className="container_right_search">
            <input
              type="text"
              placeholder="What are you looking here eg. freelancer, projects"
            />
            <button>
              <Search />
            </button>
          </div>
          <div className="container_right_nav">
            <span>Post Project</span>
            <span>Search Project</span>
          </div>
          <div className="container_right_icons">
            <div className="container_right_icons_icon">
              <Message />
              <span>4</span>
            </div>
            <div className="container_right_icons_icon">
              <Heart />
              <span>4</span>
            </div>
          </div>
          <div className="container_right_menu">
            <div className="container_right_menu_avatar"></div>
            <DownArrow />
          </div>
        </div>
        <div className="container_right-mobile">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
