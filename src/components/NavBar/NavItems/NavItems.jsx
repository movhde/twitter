import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import {
  RiTwitterXFill,
  RiNotification2Line,
  RiFileListLine,
} from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { CgProfile, CgMoreO } from "react-icons/cg";
import NavItem from "../NavItem/NavItem";

import classes from './NavItems.module.css';

const NAVBAR = [
  {
    icon: <GoHomeFill />,
    name: "Home",
  },
  {
    icon: <FiSearch />,
    name: "Explore",
  },
  {
    icon: <RiNotification2Line />,
    name: "Notification",
  },
  {
    icon: <MdOutlineMailOutline />,
    name: "Messages",
  },
  {
    icon: <RiFileListLine />,
    name: "Lists",
  },
  {
    icon: <BsPeople />,
    name: "Communities",
  },
  {
    icon: <RiTwitterXFill />,
    name: "Premium",
  },
  {
    icon: <CgProfile />,
    name: "Profile",
  },
  {
    icon: <CgMoreO />,
    name: "More",
  },
];

const NavItems = () => {
  return (
    <ul className={classes.navItems}>
      <RiTwitterXFill style={{ fontSize: "2rem"}} />
      {NAVBAR.map((item) => (
        <NavItem key={Math.random()} icon={item.icon} name={item.name} />
      ))}
    </ul>
  );
};

export default NavItems;
