import Image from "next/image";

import './styles.scss'
import hamburgermenuicon from "../../../../public/hamburgermenu.svg";
import closeicon from '../../../../public/closeicon.svg'

interface MenuTriggerProps {
  menuOpen: boolean;
  onClick: () => void;
}

const MenuTrigger = (props: MenuTriggerProps) => {
  return (
    <div className="menutrigger-parent" onClick={props.onClick}>
      {!props.menuOpen ? (
        <Image
          className="header-menu"
          src={hamburgermenuicon}
          alt=""
          width={21}
          height={18}
        ></Image>
      ) : (
        <Image
          className="header-menu"
          src={closeicon}
          alt=""
          width={21}
          height={18}
        ></Image>
      )}
    </div>
  );
};

export default MenuTrigger;