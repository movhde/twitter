import SearchBox from "../SearchBox/SearchBox";
import classes from "./SideBar.module.css";
import SubscribeBox from "../SubscribeBox/SubscribeBox";
import SuggestBox from "../SuggestBox/SuggestBox";
import TrendsBox from "../TrendsBox/TrendsBox";
import Messages from "../Messages/Messages";

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <SearchBox />
      <SubscribeBox />
      <SuggestBox />
      <TrendsBox />
      <div className={classes['sideBar-links']}>
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Accessibility</span>
        <span>Ads info</span>
        <span>More...</span>
        <span>© 2023 X Corp.</span>
      </div>
      <Messages />
    </div>
  );
};

export default SideBar;
