import "./customModal.scss";

const CustomModal = ({ children, overlayClass="modal-overlay", className }) => {
  return (
    <div className={`${overlayClass}`}>
      <div className={`modal-container ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default CustomModal