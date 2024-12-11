import { Outlet } from "react-router";

function Root() {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  );
}

export default Root;
