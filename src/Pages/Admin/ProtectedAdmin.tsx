import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';


function ProtectedAdmin(): JSX.Element {
    const isAdmin = sessionStorage.getItem("isAdmin");
    if (isAdmin == null || isAdmin != 'true') {
        return <Navigate to="/" />;
    }
    return <Outlet />
}

export default ProtectedAdmin;