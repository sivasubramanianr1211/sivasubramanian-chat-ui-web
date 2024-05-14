import React from "react";
import Styles from "../../styles/chatbox.module.scss";
import { ReactComponent as User2Icon } from "../../icons/User2.svg";
import { CallIcon, EllipseIcon } from "../../icons";

const Header: React.FC = () => {
  return (
    <div className={Styles["chatbox-header"]}>
      <div className={Styles["header-content"]}>
        <div className={Styles["header-user-profile"]}>
          <User2Icon />
          <div className={Styles["header-user-profile-status"]}>
            <div className={Styles["header-title"]}>Florencio Dorrance</div>
            <div className={Styles["header-subtitle"]}><EllipseIcon/> Online</div>
          </div>
        </div>
        <div className={Styles["header-call-btn"]}>
          <div>
            <CallIcon />{" "}
          </div>
          <div>Call</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
