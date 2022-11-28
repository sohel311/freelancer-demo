import CustomInput from "../../CustomInput";
import { ReactComponent as MailIcon } from "../../../assets/images/mail.svg";
import { ReactComponent as UnLock } from "../../../assets/images/unlock.svg";
import "./loginPop.scss";

const LoginPop = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-wrapper_header">
        <h1>Login as</h1>
      </div>
      <div className="auth-wrapper_form">
        <h2>Welcome Back,</h2>
        <div className="auth-wrapper_form_item">
          <CustomInput
            className="auth-wrapper_form_item_input"
            Icon={MailIcon}
            label="Email Address"
            placeholder={"eg. celestine@gmail.com"}
          />
        </div>
        <div className="auth-wrapper_form_item">
          <CustomInput
            className="auth-wrapper_form_item_input"
            Icon={UnLock}
            label="Password"
            placeholder={"********"}
          />
        </div>
        <div className="auth-wrapper_form_forgot-text">Forgot Password ?</div>
        <button>Sign in</button>
      </div>
      <div className="auth-wrapper_divider">
        <hr /><span>OR</span><hr/>
      </div>
      <div className="auth-wrapper_footer">
        <p>New user account ?</p> <b>Sign Up</b>
      </div>
    </div>
  );
};

export default LoginPop;
