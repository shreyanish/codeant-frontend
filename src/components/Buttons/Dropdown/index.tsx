import Image from "next/image";

import dropdownicon from "../../../../public/dropdownicon.svg";
import "./styles.scss";

const Dropdown = () => {
  return (
    <div className="dropdown-parent">
      <p className="dropdown-user">UtkarshDhairyaPanwar</p>
      <Image src={dropdownicon} alt=""></Image>
    </div>
  );
};

export default Dropdown;