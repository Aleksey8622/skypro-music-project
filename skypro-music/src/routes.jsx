import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Favorites } from "./pages/Favorites/Favorites";
import { Category } from "./pages/Category/Category";
import { NotFound } from "./pages/NotFound/NotFound";
import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./componets/protected-route/protected";
import { useState } from "react";
import { Registracion } from "./pages/Registration/Registration";

export const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const cancelHandler = () => {
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route
          path="/"
          element={<Main user={user} cancelHandler={cancelHandler} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="/login" element={<Login user={user} setUser={setUser} />} />
      <Route path="/registracion" element={<Registracion/>} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
};
