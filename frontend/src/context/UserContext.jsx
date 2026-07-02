import axios from "axios";
import react, { useContext, Children, createContext, useState } from "react";
import { useEffect } from "react";
import { authDataContext } from "./Authcontext";

export const userDataContext = createContext();

function UserContext({ children }) {
  let { serverUrl } = useContext(authDataContext);
  let [UserData, setUserData] = useState(null);

  const getcurrentUser = async () => {
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
    getcurrentUser();
  }, []);
  let value = {
    UserData,
    setUserData,
    getcurrentUser,
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
