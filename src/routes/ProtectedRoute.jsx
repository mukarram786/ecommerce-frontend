import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function ProtectedRoute({ element, redirectTo = "/", isAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated]);

  return element;
}
export default ProtectedRoute
