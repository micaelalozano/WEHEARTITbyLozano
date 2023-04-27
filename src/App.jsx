import React from "react";
//import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  /*{  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/ruta/me")
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        setUser(user);
      });
  }, []);}*/

  // console.log("acaa", user);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default App;
