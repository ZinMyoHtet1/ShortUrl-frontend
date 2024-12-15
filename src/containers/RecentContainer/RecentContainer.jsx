/* eslint-disable react/prop-types */
import { Recent } from "../../components";
import "./recentcontainer.css";

const RecentContainer = ({ recents }) => {
  return (
    <div className="recent-container">
      {recents?.map((recent, i) => (
        <Recent url={recent} key={`recent-${i}`} />
      ))}
    </div>
  );
};

export default RecentContainer;
