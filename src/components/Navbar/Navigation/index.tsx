"use client";

import Dropdown from "@/components/Buttons/Dropdown";
import Tab from "./Tab";

import tabData from "../../../data/tabs";
import "./styles.scss";

interface NavigationProps {
  menuOpen: boolean;
  onClick: () => void;
}

const Navigation = ({ menuOpen, onClick }: NavigationProps) => {
  return (
    <div
      className="navigation-parent"
      style={{
        display: menuOpen ? "flex" : "none",
      }}
    >
      <div className="navigation-top">
        <Dropdown />
        <div className="navigation-tabs">
          {tabData.top.map((tab) => (
            <Tab
              key={tab.key}
              icon={tab.icon}
              name={tab.name}
              link={tab.link}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
      <div className="navigation-bottom">
        <div className="navigation-tabs">
          {tabData.bottom.map((tab) => (
            <Tab
              key={tab.key}
              icon={tab.icon}
              name={tab.name}
              link={tab.link}
              onClick={onClick}
            />
          ))}
        </div>
      </div>
      <div className="backdrop"></div>
    </div>
  );
};

export default Navigation;
