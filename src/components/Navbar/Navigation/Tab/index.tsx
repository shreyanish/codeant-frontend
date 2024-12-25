import { useRouter, usePathname } from "next/navigation";

import authStore from "../../../../../stores/authStore";

import PrimaryButton from "@/components/Buttons/Primary";
import InactiveTab from "@/components/Buttons/InactiveTab";

interface TabProps {
  icon: [string, string];
  name: string;
  link: string;
  onClick: () => void;
}

const Tab = (props: TabProps) => {
  let pathname = usePathname();
  let router = useRouter();

  const handleClick = () => {
    if (props.name === "Logout") {
      authStore.setSignedIn(false);
    }
    router.push(props.link);
    props.onClick();
  };

  return (
    <div className="tab-parent">
      {pathname != props.link ? (
        <InactiveTab
          imageSource={props.icon[0]}
          text={props.name}
          onClick={handleClick}
        />
      ) : (
        <PrimaryButton
          imageSource={props.icon[1]}
          text={props.name}
          onClick={handleClick}
          size="md"
        />
      )}
    </div>
  );
};

export default Tab;