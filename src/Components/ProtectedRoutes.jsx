import { Navigate } from "react-router";

function ProtectedRoutes({ userName, children }) {
    if (!userName) {
        return <Navigate to="/" replace />;
    }
    return children;
}

export default ProtectedRoutes;