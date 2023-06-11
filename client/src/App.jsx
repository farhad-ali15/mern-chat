/* eslint-disable no-unused-vars */
import axios from "axios";
import Routes from "./Routes";
import { UserContextProvider } from "./UserContext.jsx";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";
  axios.defaults.withCredentials = true;

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
