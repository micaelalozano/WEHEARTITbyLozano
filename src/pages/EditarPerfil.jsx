import React from "react";
import Navbar from "../components/Navbar";
import NavCelular from "../components/NavCelular";
import { Notification } from "baseui/notification";

const EditarPerfil = () => {
  return (
    <>
      <Navbar />
      <NavCelular />
      <Notification>
      {() => "This is a notification."}
    </Notification>
    </>
  );
};

export default EditarPerfil;
