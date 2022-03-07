import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

const GuardedRoute = ({children, isAuthenticated}) => {
    const location = useLocation();
    return isAuthenticated ? children : <Navigate to="/login" replace state={{path: location.pathname}} />;
}

export default GuardedRoute;