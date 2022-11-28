import CustomModal from "../../components/CustomModal";
import LoginPop from "../../components/PopUp/LoginPop";
import ForgotPasswordPop from "../../components/PopUp/ForgotPasswordPop";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="page_wrapper">
      <CustomModal className="auth-pop">
        <LoginPop />
        {/* <ForgotPasswordPop /> */}
      </CustomModal>
    </div>
  );
};

export default HomePage;
