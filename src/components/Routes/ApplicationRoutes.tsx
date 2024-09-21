//#region imports
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../LoginPage/Login";
import LandingPage from "../LandingPage/LandingPage";
//#endregion

//#region interfaces & types
//#endregion

//#region Function Component
const ApplicationRoutes: React.FC = ({}) => {
  //#region Component states
  //#endregion

  //#region Component hooks
  React.useEffect(() => {
    // Anything in here is fired on component mount.
    return () => {
      // Anything in here is fired on component unmount.
    };
  }, []);

  React.useEffect(() => {
    // Anything in here is fired on component update.
  });
  //#endregion

  //#region Component Styles
  //#endregion

  //#region Component validation methods
  //#endregion

  //#region Component Api methods
  //#endregion

  //#region Component feature methods
  //#endregion

  //#region Component JSX.members
  //#endregion

  //#region Component renders
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            sessionStorage.getItem("isAuthenticated") === "true" ? (
              <LandingPage />
            ) : (
              <Login />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
  //#endregion
};
//#endregion

//#region Component export
export default ApplicationRoutes;
//#endregion
