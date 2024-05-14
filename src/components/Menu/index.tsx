import React from "react";
import Styles from "../../styles/menu.module.scss";
import {
  MenuLogo,
  MessageIcon,
  HomeIcon,
  ListIcon,
  CalendarIcon,
  SearchIcon,
  SettingsIcon,
} from "../../icons";

interface MenuItem {
  label: string;
  link: string;
}

interface MenuProps {
  items?: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items = [] }) => {
  return (
    <div className={Styles["menu-container"]}>
      <MenuLogo data-testid="menu-logo" />
      <div className={Styles["menu-item-container"]}>
        <HomeIcon data-testid="home-icon" />
        <MessageIcon />
        <ListIcon />
        <SearchIcon />
        <CalendarIcon />
      </div>
      <div className={Styles["settings-container"]}>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Menu;
