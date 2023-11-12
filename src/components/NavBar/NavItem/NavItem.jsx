import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      {<props.icon className={classes.icon} />} {props.name}
    </li>
  );
};

export default NavItem;
