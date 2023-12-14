import PropTypes from "prop-types";

function Image(props) {
  return (
    <div className={props.outsideClassName}>
      <img src={props.src} loading="lazy" alt={props.alt} />
    </div>
  )
}
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  outsideClassName: PropTypes.string,
};

export default Image;
