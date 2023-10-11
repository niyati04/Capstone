import PropTypes from "prop-types";

function Input(props) {
  return (
    <div className="input_label_login_container">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <br />
      <input
        type={props.type ? props.type : "text"}
        placeholder={props.placeholder ? props.placeholder : "name"}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        onKeyDown={props.onKeyDown}
        autoComplete="off"
        className={props.className}
        disabled={props.disabled}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  errors: PropTypes.string,
  isRemoveBottomMargin: PropTypes.bool,
  onIconClick: PropTypes.func,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
