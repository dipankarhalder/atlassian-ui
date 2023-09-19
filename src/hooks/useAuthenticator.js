import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthenticator = (authlink, notAuthLink) => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUserToken = localStorage.getItem('userToken');
    if (getUserToken) {
      navigate(authlink);
    } else {
      navigate(notAuthLink);
    }
  }, [authlink, notAuthLink, navigate]);
};
