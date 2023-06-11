/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { UserContext } from "./UserContext.jsx";
import RegisterAndLoginForm from "./RegisterAndLoginForm";

const Routes = () => {
  const { username, id } = useContext(UserContext);

  if (username) {
    return "logged in";
  }
  return <RegisterAndLoginForm />;
};

export default Routes;
