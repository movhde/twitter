import { FiSettings } from 'react-icons/fi';
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes['forYou-section']}>For you</div>
      <div className={classes['following-section']}>Following</div>
      <div className={classes['setting-icon']}><FiSettings /></div>
    </div>
  )
}

export default Header;