import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";


export const ProtectedRoute = ({ children }) => {
  const isloggedIn = Auth.loggedIn;
  if (!isloggedIn) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};