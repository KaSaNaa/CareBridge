import { Navigate, useLocation } from "react-router-dom";
import { auth } from "./config/firebaseConfigs";

const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return user ? children : <Navigate to="/signin" state={{ from: location }} />;
};

export default ProtectedRoutes;