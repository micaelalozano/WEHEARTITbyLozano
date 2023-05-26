import React from "react";
import Navbar from "../components/Navbar";
import NavCelular from "../components/NavCelular";
import Cuenta from "../components/Cuenta";
import Fotografia from "../components/Fotografia";
import MisPublicaciones from "../components/MisPublicaciones";
import { Tabs, Tab } from "baseui/tabs-motion";
//Estilos
import "../estilos/navCelular.css";

const EditarPerfil = () => {
  const [activeKey, setActiveKey] = React.useState("0");

  return (
    <>
      <Navbar />
      <NavCelular />
      <div className="confi">
        <h1 className="h1-confi">Configuraciones</h1>
      </div>
      <Tabs
        activeKey={activeKey}
        onChange={({ activeKey }) => {
          setActiveKey(activeKey);
        }}
        activateOnFocus
        overrides={{
          Root: {
            style: {
              margin: "0em 3em",
              "@media screen and (max-width: 600px)": {
                margin: "0em 1em",
              },
            },
          },
          TabHighlight: {
            style: ({ $theme }) => ({
              outline: `#ff4477`,
              backgroundColor: "#ff4477",
            }),
          },
        }}
      >
        <Tab title="Cuenta">
          <Cuenta />
        </Tab>
        <Tab title="Fotografía">
          <Fotografia />
        </Tab>
        <Tab title="Mis publicaciones">
          <MisPublicaciones />
        </Tab>
      </Tabs>
    </>
  );
};

export default EditarPerfil;
