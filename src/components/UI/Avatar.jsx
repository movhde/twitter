import image from '../../assets/movahedeProfile.jpg';
import classes from './Avatar.module.css';

const Avatar = () => {
  return (
    <img className={classes.avatar} src={image} alt="Profile Picture" />
  )
}

export default Avatar;