//guard/protectedRoute.tsx
import { ReactNode } from 'react';
import { Navigate } from 'react-router';

interface ProtectedRouteProps {
  isAllowed: boolean;
  children: ReactNode; 
}

const ProtectedRoute = ({ isAllowed, children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;