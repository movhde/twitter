import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={classes.navItem}>
      <span className={classes.span}>{props.icon}</span> {props.name}
    </li>
  );
};

export default NavItem;
