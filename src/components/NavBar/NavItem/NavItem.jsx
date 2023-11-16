import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      {<props.icon className={classes.icon} />} <span>{props.name}</span>
    </li>
  );
};

export default NavItem;
