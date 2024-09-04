import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ element }) {
    const user_data = JSON.parse(localStorage.getItem("user_data"));
    const location = useLocation();

    if (user_data?.access) {
        return element;
    } else {
        return (
            <Navigate
                to={`/auth/login/?next=${encodeURIComponent(location.pathname)}`}
                replace
            />
        );
    }
}

export default PrivateRoute;
