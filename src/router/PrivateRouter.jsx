import { useContext } from "react";
import { AuthContext } from "../components/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
    </div>
    }

    if (user) {
        return children
    }
    
    return  <Navigate to='/login' state={location.pathname} replace={true} />
    
};

export default PrivateRouter;