import Button from '../../UI/Button';
import Wrapper from '../Wrapper/Wrapper';
import classes from './SubscribeBox.module.css';

const SubscribeBox = () => {
  return (
    <Wrapper>
      <div className={classes['subscribe-box']}>
        <span className={classes["subscribe-box__title"]}>Subscribe to Premium</span>
        <span className={classes["subscribe-box__body"]}>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </span>
        <Button width="middle">Subscribe</Button>
      </div>
    </Wrapper>
  );
};

export default SubscribeBox;
