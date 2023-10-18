/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const PrivateRouter = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if (loading){
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-lg"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRouter;