import Select from "react-select";
import "./customSelect.scss";

const CustomSelect = ({ label, className, Icon, ...rest }) => {
  return (
    <div className={`freelancer-select ${className}`}>
      {label && <label>{label}</label>}
      <div className={`freelancer-select_wrapper-icon`}>
        {Icon && <Icon className="suffix" />}
        <Select classNamePrefix={"custom-select"} {...rest} />
      </div>
    </div>
  )
}

export default CustomSelect