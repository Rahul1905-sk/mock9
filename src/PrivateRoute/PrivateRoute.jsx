import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
// console.log(children);
const {isAuth} = useSelector(store => store.AuthReducer)
console.log(isAuth)
return isAuth ? children : <Navigate to="/login" />;
 
}

export default PrivateRoute