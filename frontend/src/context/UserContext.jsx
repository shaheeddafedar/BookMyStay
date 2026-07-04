import axios from "axios";
import react, { useContext, Children, createContext, useState } from "react";
import { useEffect } from "react";
import { authDataContext } from "./Authcontext";

export const userDataContext = createContext();

function UserContext({ children }) {
  let { serverUrl } = useContext(authDataContext);
  let [UserData, setUserData] = useState(null);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true,
      });
      setUserData(result.data);
    } catch (error) {
      setUserData(null);
      console.log(error.response?.data);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  let value = {
    UserData,
    setUserData,
    getCurrentUser,
  };
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}
export default UserContext;
