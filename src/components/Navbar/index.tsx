"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import Navigation from "./Navigation";
import MenuTrigger from "./MenuTrigger";

import ilu from "../../../public/ilu.svg";
import "./styles.scss";

const Navbar = () => {
  let pathname = usePathname();
  let [menuOpen, setMenuOpen] = useState(false);
  let mobileDevice = useMediaQuery("(max-width:740px)");

  return pathname !== "/signin" ? (
    <div className="navbar-parent">
      <div className="header-parent">
        <Image
          className="header-logo"
          src={ilu}
          alt=""
          width={162}
          height={32}
        ></Image>
        <MenuTrigger
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <Navigation menuOpen={!mobileDevice? true :menuOpen} onClick={() => setMenuOpen(false)} />
    </div>
  ) : null;
};

export default Navbar;
