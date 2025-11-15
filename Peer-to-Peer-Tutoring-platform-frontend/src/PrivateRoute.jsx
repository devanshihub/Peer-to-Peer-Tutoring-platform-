import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ allowedType }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.type !== allowedType) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default PrivateRoute;
