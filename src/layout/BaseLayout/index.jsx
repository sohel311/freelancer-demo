import Footer from "../Footer";
import Header from "../Header";
import "./baseLayout.scss";
import PatternBackground from "./PatternBackground";

const BaseLayout = ({ children, title, background, handleNavigate }) => {

  const renderBg = () => {
    switch(background) {
      case "default": {
        return <PatternBackground title={title} />
      }
      default: {
        return null
      }
    }
  }

  return (
    <div className="base-layout">
      <Header />
      <div className="base-layout_content">
        <section>
          {renderBg()}
        </section>
        <div className="base-layout_content_wrapper">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
