import { FiSearch } from "react-icons/fi";
import classes from "./SideBar.module.css";
import { useState } from "react";

const SideBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  let cssClass = classes["searchBox-container__inner"];

  return (
    <>
      <div className={classes.sideBar}>
        <div className={classes["searchBox-container"]}>
          <div
            className={`${cssClass} ${isClicked ? classes.border : ""}`}
            onClick={() => setIsClicked(true)}
          >
            <FiSearch
              className={`${classes.searchIcon} ${
                isClicked ? classes["icon-color"] : ""
              }`}
            />
            <input className={classes.searchBox} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
