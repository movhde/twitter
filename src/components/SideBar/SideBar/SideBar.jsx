import SearchBox from "./SearchBox";
import Button from '../../UI/Button';
import classes from './SideBar.module.css'

const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <SearchBox />
      <div className={classes['premium-section']}>
        <span className={classes['premium-title']}>Subscribe to Premium</span>
        <span>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
        <Button width='middle'>Subscribe</Button>
      </div>
    </div>
  );
};

export default SideBar;
