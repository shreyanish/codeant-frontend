import homeicon from "../../public/homeicon.svg";
import homeiconw from '../../public/homeicon-w.svg'
import codereviewicon from '../../public/codereview.svg';
import codereviewiconw from '../../public/codereview-w.svg'
import cloudsecurityicon from '../../public/cloudicon.svg';
import cloudsecurityiconw from '../../public/cloudicon-w.svg'
import bookicon from '../../public/bookicon.svg';
import bookiconw from '../../public/bookicon-w.svg'
import settingsicon from '../../public/settingsicon.svg';
import settingsiconw from '../../public/settingsicon-w.svg'
import phoneicon from '../../public/phoneicon.svg'
import phoneiconw from '../../public/phoneicon-w.svg'
import logouticon from '../../public/logouticon.svg'

type NavigationItem = {
  key: number;
  icon: [string, string];
  name: string;
  link: string;
}

const NavigationTop: NavigationItem[] = [
  {
    key: 1,
    icon: [homeicon, homeiconw],
    name: "Repositories",
    link: "/",
  },
  {
    key: 2,
    icon: [codereviewicon, codereviewiconw],
    name: "AI Code Review",
    link: "/aicodereview",
  },
  {
    key: 3,
    icon: [cloudsecurityicon, cloudsecurityiconw],
    name: "Cloud Security",
    link: "/cloudsecurity",
  },
  {
    key: 4,
    icon: [bookicon, bookiconw],
    name: "How to Use",
    link: "/userguide",
  },
  {
    key: 5,
    icon: [settingsicon, settingsiconw],
    name: "Settings",
    link: "/settings",
  },
];

const NavigationBottom: NavigationItem[] = [
  {
    key: 1,
    icon: [phoneicon, phoneiconw],
    name: "Support",
    link: "/support",
  },
  {
    key: 2,
    icon: [logouticon, logouticon],
    name: "Logout",
    link: "/signin",
  },
]

const Navigation = {
  top: NavigationTop,
  bottom: NavigationBottom,
};

export default Navigation;