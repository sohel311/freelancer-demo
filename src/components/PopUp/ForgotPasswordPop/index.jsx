import CustomInput from "../../CustomInput";
import { ReactComponent as MailIcon } from "../../../assets/images/mail.svg";
import { ReactComponent as UnLock } from "../../../assets/images/unlock.svg";
import "./forgotPop.scss";

const ForgotPasswordPop = () => {
  return (
    <div className="forgot-wrapper">
      <div className="forgot-wrapper_header">
        <h1>Forgot Password ?</h1>
      </div>
      <div className="forgot-wrapper_form">
        <p className="forgot-wrapper_form_desc" >Please type registered email id to reset password.</p>
        <div className="forgot-wrapper_form_item">
          <CustomInput
            className="forgot-wrapper_form_item_input"
            Icon={MailIcon}
            label="Email ID"
            placeholder={"eg. celestine@gmail.com"}
          />
        </div>
        <button>Send OTP</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPop;
