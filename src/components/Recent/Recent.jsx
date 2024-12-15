/* eslint-disable react/prop-types */
import "./recent.css";

const Recent = ({ url, ...rest }) => {
  return (
    <div className="recent-url" {...rest}>
      <div className="shortUrl">{url.shortUrl}</div>
      <div className="rootUrl">{url.rootUrl}</div>
    </div>
  );
};

export default Recent;
