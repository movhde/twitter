import classes from './Avatar.module.css';

const Avatar = (props) => {
  return (
    <img className={classes.avatar} src={props.src} alt="Profile Picture" />
  )
}

export default Avatar;