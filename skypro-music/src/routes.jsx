import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Favorites } from "./pages/Favorites/Favorites";
import { Category } from "./pages/Category/Category";
import { NotFound } from "./pages/NotFound/NotFound";
// import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./componets/protected-route/protected";
// import { useState } from "react";
// import { Registracion } from "./pages/Registration/Registration";
import AuthPage from "./pages/Auth/AuthPage";
import { AuthProvider } from "../src/store/AuthContext";

export const AppRoutes = () => {
  // const [user, setUser] = useState(null);

  // const cancelHandler = () => {
  //   localStorage.removeItem("user");

  //   setUser(null);
  // };

  return (
    <AuthProvider>
      <Routes>
        <Route element={<ProtectedRoute  />}>
          <Route
            path="/"
            element={<Main  />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:id" element={<Category />} />
        </Route>
        <Route path="/login" element={<AuthPage isLoginMode={true} />} />
        <Route path="/register" element={<AuthPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};
