import { NavLink } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="bg">
        <div className="error-page">
          <h1>Page Not Found</h1>
          <NavLink exact to="/calldetail">
            <div className="login-btn"><button >Go Back</button></div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
