import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import classes from "./SearchBox.module.css";

const SearchBox = () => {
  const [isClicked, setIsClicked] = useState(false);

  let cssClass = classes["searchBox-container__inner"];

  return (
    <div className={classes["searchBox-container"]}>
      <div
        className={`${cssClass} ${isClicked ? classes.border : ""}`}
        onClick={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
      >
        <FiSearch
          className={`${classes.searchIcon} ${
            isClicked ? classes["icon-color"] : ""
          }`}
        />
        <input placeholder="Search" className={classes.searchBox} />
      </div>
    </div>
  );
};

export default SearchBox;
