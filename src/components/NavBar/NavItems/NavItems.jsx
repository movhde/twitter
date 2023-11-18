import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import {
  RiTwitterXFill,
  RiNotification2Line,
  RiFileListLine,
} from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsPeople, BsThreeDots } from "react-icons/bs";
import { CgProfile, CgMoreO } from "react-icons/cg";
import NavItem from "../NavItem/NavItem";
import image from "../../../assets/movahedeProfile.jpg";

import classes from "./NavItems.module.css";
import Button from "../../UI/Button";
import Avatar from "../../UI/Avatar";

const NAVBAR = [
  {
    icon: RiTwitterXFill,
  },
  {
    icon: GoHomeFill,
    name: "Home",
  },
  {
    icon: FiSearch,
    name: "Explore",
  },
  {
    icon: RiNotification2Line,
    name: "Notification",
  },
  {
    icon: MdOutlineMailOutline,
    name: "Messages",
  },
  {
    icon: RiFileListLine,
    name: "Lists",
  },
  {
    icon: BsPeople,
    name: "Communities",
  },
  {
    icon: RiTwitterXFill,
    name: "Premium",
  },
  {
    icon: CgProfile,
    name: "Profile",
  },
  {
    icon: CgMoreO,
    name: "More",
  },
];

const NavItems = () => {
  return (
    <ul className={classes.navItems}>
      {NAVBAR.map((item) => (
        <NavItem key={Math.random()} icon={item.icon} name={item.name} />
      ))}
      <div className={classes.buttonContainer}>
        <Button width="big">Post</Button>
      </div>
      <div className={classes.account}>
        <div className={classes.profile}>
          <Avatar src={image} />
        </div>
        <div className={classes.usernameContainer}>
          <span className={classes.username}>movhde</span>
          <span className={classes.userId}>@movahde</span>
        </div>
        <div className={classes.icon}>
          <BsThreeDots size={18} />
        </div>
      </div>
    </ul>
  );
};

export default NavItems;
