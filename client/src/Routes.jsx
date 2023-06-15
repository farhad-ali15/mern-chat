/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { UserContext } from "./UserContext.jsx";
import RegisterAndLoginForm from "./RegisterAndLoginForm";
import Chat from "./Chat.jsx";

const Routes = () => {
  const { username, id } = useContext(UserContext);

  if (username) {
    return <Chat />;
  }
  return <RegisterAndLoginForm />;
};

export default Routes;
