import React, { useState } from "react";
import { ApplicationViews } from "./ApplicationViews";
import "./AppForBudgetEase.css";
import { NavBar } from "./nav/NavBar";
import { Footer } from "./nav/Footer";



export const AppForBudgetEase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("AppForBudgetEase_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("AppForBudgetEase_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("AppForBudgetEase_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("AppForBudgetEase_user") !== null);
  };

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Footer/>
     </>
  );
};
