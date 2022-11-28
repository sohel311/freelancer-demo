import "./customInput.scss";

const CustomInput = ({ label, className, Icon, ...rest }) => {
  return (
    <div className={`freelancer-input ${className}`}>
      {label && <label>{label}</label>}
      <div className={`freelancer-input_wrapper-icon`}>
        {Icon && <Icon />}
        <input {...rest} />
      </div>
    </div>
  )
}

export default CustomInput