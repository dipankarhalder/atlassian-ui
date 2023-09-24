import { Navigate } from 'react-router-dom';
import { LOGIN } from '../../utils/routes';

export const ProtectedRoute = ({ children }) => {
  const getUserToken = localStorage.getItem('userToken');
  if (!getUserToken) {
    return <Navigate to={LOGIN} replace />;
  }
  return children;
};
