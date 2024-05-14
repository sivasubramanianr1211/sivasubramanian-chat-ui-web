import React from "react";
import Styles from "../styles/base.module.scss";
import { Menu, ChatBox, Member, Directory } from "../components";

const Base: React.FC = () => {
  return (
    <div className={Styles["flex-container"]}>
      <div className={Styles["column-1"]}>
        <Menu />
      </div>
      <div className={Styles["column-2"]}>
        <div style={{ overflowY: "auto", maxHeight: "100vh" }}>
          <Member />
        </div>
      </div>
      <div className={Styles["column-3"]}>
        <ChatBox />
      </div>
      <div className={Styles["column-4"]}>
        <Directory />
      </div>
    </div>
  );
};

export default Base;
