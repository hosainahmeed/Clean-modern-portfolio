import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../../public/hooks/useAuth";

function AdminSecure({ children }) {
  const { user } = useAuth();
  const location = useLocation()

  if (!user) {
    return <Navigate state={location.pathname} to="/login" />;
  }

  return children;
}

export default AdminSecure;
