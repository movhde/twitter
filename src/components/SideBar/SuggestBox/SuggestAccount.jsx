import Avatar from "../../UI/Avatar";
import Button from "../../UI/Button";
import classes from './SuggestAccount.module.css';

const SuggestAccount = (props) => {
  return (
    <div className={classes["account-suggestion"]}>
      <div className={classes["account-suggestion__inner"]}>
        <Avatar src={props.image} />
        <div className={classes["account-info"]}>
          <span>{props.userName}</span>
          <span>{props.userId}</span>
        </div>
        <div>
          <Button bgColor="black" color="white" width="small">Follow</Button>
        </div>
      </div>
    </div>
  );
};

export default SuggestAccount;
