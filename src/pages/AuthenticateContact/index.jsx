import SignUpBg from "../../assets/images/signup-bg.png";
import OtpInput from "react-otp-input";
import "./authenticateContact.scss";

const AuthenticateContact = ({ handleNavigate }) => {
  return (
    <div className="otp">
      <div className="otp_left">
        <div className="otp_left_title">Email Confirmation</div>
        <div className="otp_left_sub-title">
          Please verify the given abc@gmail.com email id
        </div>
        <form className="otp_left_form-wrapper">
          <div className="otp_left_form-wrapper_form-item" >
            <label>6 Digit OTP</label>
            <OtpInput
              className="otp_left_form-wrapper_form-item_otp"
              numInputs={6}
              separator={<span className="separator"></span>}
            />
          </div>
          <button className="otp_left_form-wrapper_submit-btn" type="submit">
            Continue
          </button>
        </form>
      </div>
      <div className="otp_right">
        <img src={SignUpBg} />
      </div>
    </div>
  );
};

export default AuthenticateContact;
