import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button className={[classes.button, classes[props.width]].join(' ')}>
      {props.children}
    </button>
  )
}

export default Button;