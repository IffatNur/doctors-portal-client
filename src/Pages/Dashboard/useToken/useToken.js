import { useEffect, useState } from "react";

const useToken = (email) => {
    const [userToken, setUserToken] = useState('');
  useEffect(() => {
    if(email){
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.accessToken) {
            localStorage.setItem("Token", data.accessToken);
            setUserToken(data.accessToken);
          }
        });
    } 
  }, [email]);
  return [userToken];
};
export default useToken;
