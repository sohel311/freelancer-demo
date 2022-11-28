import SignUpBg from "../../assets/images/signup-bg.png";
import CustomInput from "../../components/CustomInput";
import { ReactComponent as UserIcon } from "../../assets/images/user_profile.svg";
import { ReactComponent as MailIcon } from "../../assets/images/mail.svg";
import { ReactComponent as Globe } from "../../assets/images/globe.svg";
import { ReactComponent as UnLock } from "../../assets/images/unlock.svg";
import { ReactComponent as Lock } from "../../assets/images/unlock.svg";
import "./SignUp.scss";
import CustomSelect from "../../components/CustomSelect";
import CustomRadio from "../../components/CustomRadio";
import CustomModal from "../../components/CustomModal";

const options = [
  { value: "IN", label: "India" },
  { value: "USA", label: "United States" },
  { value: "CAN", label: "Canada" },
];

const SignUP = ({ handleNavigate }) => {
  return (
    <>
      <CustomModal overlayClass={"responsive-overlay"} className="signup-pop">
        <div className="signup">
          <div className="signup_left">
           <div className={"signup_left_wrapper"} >
           <div className="signup_left_title">Let’s Sign Up</div>
            <form className="signup_left_form-wrapper">
              <div className="signup_left_form-wrapper_item_multiple">
                <CustomInput
                  className={"signup_left_form-wrapper_item_multiple_form-item"}
                  Icon={UserIcon}
                  label="First Name"
                  placeholder={"eg. celestin"}
                />
                <CustomInput
                  className={"signup_left_form-wrapper_item_multiple_form-item"}
                  Icon={UserIcon}
                  label="Last Name"
                  placeholder={"eg. dsouza"}
                />
              </div>
              <div className="signup_left_form-wrapper_item_single">
                <CustomInput
                  className="signup_left_form-wrapper_item_single_form-item"
                  Icon={MailIcon}
                  label="Contact Number"
                  placeholder={"eg. 9870085422"}
                />
              </div>
              <div className="signup_left_form-wrapper_item_single">
                <CustomInput
                  className="signup_left_form-wrapper_item_single_form-item"
                  Icon={MailIcon}
                  label="Email Address"
                  placeholder={"eg. celestine@gmail.com"}
                />
              </div>
              <div className="signup_left_form-wrapper_item_single">
                <CustomSelect
                  className="signup_left_form-wrapper_item_single_form-item"
                  Icon={Globe}
                  label="Country"
                  placeholder={"Select Country"}
                  options={options}
                />
              </div>
              <div className="signup_left_form-wrapper_item_multiple">
                <CustomInput
                  className={
                    "signup_left_form-wrapper_item_multiple_form-item-password"
                  }
                  Icon={UnLock}
                  label="Password"
                  placeholder="******"
                  type={"password"}
                />
                <CustomInput
                  className={
                    "signup_left_form-wrapper_item_multiple_form-item-password"
                  }
                  Icon={UnLock}
                  label="Confirm Password"
                  type={"password"}
                  placeholder="******"
                />
              </div>
              <div className="signup_left_form-wrapper_item_multiple">
                <CustomRadio
                  className={
                    "signup_left_form-wrapper_item_multiple_form-item-radio"
                  }
                  name="userType"
                  value="Freelancer"
                  type="radio"
                  label="Freelancer"
                />
                <CustomRadio
                  className={
                    "signup_left_form-wrapper_item_multiple_form-item-radio"
                  }
                  name="userType"
                  value="Client"
                  type="radio"
                  label="Client"
                />
              </div>
              <div className="signup_left_form-wrapper_terms">
                By signing up you agree to ABC{" "}
                <b>
                  <u>Terms of Service</u>
                </b>{" "}
                &{" "}
                <b>
                  <u>Privacy policy</u>
                </b>
              </div>
              <button
                className="signup_left_form-wrapper_submit-btn"
                type="submit"
              >
                Continue
              </button>
            </form>
           </div>
          </div>
          <div className="signup_right">
            <img src={SignUpBg} />
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default SignUP;
