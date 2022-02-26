import { NavLink } from "react-router-dom";
const Sample = () => {
  return (
    <>
      <div className="bg">
        <div className="error-page">
          <h1>Page Found</h1>
          <NavLink exact to="/dashboard">
            <div className="login-btn"><button >Go Back</button></div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sample;