import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Favorites } from "./pages/Favorites/Favorites";
import { Category } from "./pages/Category/Category";
import { NotFound } from "./pages/NotFound/NotFound";
// import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./componets/protected-route/protected";
import { useState } from "react";
// import { Registracion } from "./pages/Registration/Registration";
import AuthPage from "./pages/Auth/AuthPage";
import { AuthProvider } from "../src/store/AuthContext";

import { ThemeContext, themes } from "../src/pages/Theme/ThemeContext";
import { PageLayout } from "./componets/PageLayout/PageLayout";

export const AppRoutes = () => {
  // const [user, setUser] = useState(null);

  // const cancelHandler = () => {
  //   localStorage.removeItem("user");

  //   setUser(null);
  // };

  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <AuthProvider>
      <ThemeContext.Provider value={{ toggleTheme, theme: currentTheme }}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Main />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/category/:id" element={<Category />} />
            </Route>
          </Route>
          <Route path="/login" element={<AuthPage isLoginMode={true} />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </AuthProvider>
  );
};
