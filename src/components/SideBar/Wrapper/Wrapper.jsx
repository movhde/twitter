import classes from './Wrapper.module.css';

const Wrapper = (props) => {
  return (
    <div className={[classes.wrapper, classes[props.className]].join(" ")}>
      {props.children}
    </div>
  );
};

export default Wrapper;
