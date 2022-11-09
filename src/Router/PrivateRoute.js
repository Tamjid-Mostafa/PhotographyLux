import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <h1 className='text-5xl'>Loading...</h1>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;