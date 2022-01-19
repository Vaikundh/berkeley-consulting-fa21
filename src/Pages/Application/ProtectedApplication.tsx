import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';


function ProtectedApplication(): JSX.Element {
    const token = sessionStorage.getItem("Auth Token");
    if (token == null || token == '') {
        return <Navigate to="/" />;
    }
    return <Outlet />
}

export default ProtectedApplication;