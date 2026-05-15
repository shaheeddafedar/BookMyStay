import axios from "axios";
import react, { useContext, Children, createContext, useState } from "react";
import { useEffect } from "react";

export const userDateContext = createContext();

function UserContext({ Children }) {
  let { serverUrl } = useContext(authDataContext);
  let [userData, setUserdata] = useState(null);

  const getcurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/currentuser", {
        withCredentials: true,
      });
      setUserdata(result.data);
    } catch (error) {
      setUserdata(null).console.log(error);
    }
  };
  useEffect(() => {
    getcurrentUser();
  });
  let value = {
    userData,
    setUserdata,
  };
  return (
    <div>
      <userDateContext.Provider value={value}>
        {Children}
      </userDateContext.Provider>
    </div>
  );
}
export default UserContext;
