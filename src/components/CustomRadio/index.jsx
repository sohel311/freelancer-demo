import "./customRadio.scss";

const CustomRadio = ({ label, className, ...rest }) => {
  return (
    <div className={`freelancer-radio ${className}`}>
      <div className={`freelancer-radio_wrapper`}>
        <input {...rest} />
      </div>
      {label && <label>{label}</label>}
    </div>
  )
}

export default CustomRadio