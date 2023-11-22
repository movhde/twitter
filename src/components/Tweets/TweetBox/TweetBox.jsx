import { BsThreeDots } from "react-icons/bs";

import Avatar from "../../UI/Avatar";
import Card from "../../UI/Card/Card";
import classes from "./TweetBox.module.css";
import TweetBoxIcons from "./ TweetBoxIcons";
import styles from "../TweetPost/Icons.module.css";

const TweetBox = (props) => {
  return (
    <Card className="backdrop">
      <div className={classes.avatar}>
        <Avatar src={props.avatar} />
      </div>
      <div className={classes.tweetBox}>
        <div className={classes.tweetInfo}>
          <div className={classes["tweetInfo-inner"]}>
            <span className={classes["text-underline"]}>{props.username}</span>
            <span className={classes["light-size"]}>{props.userId}</span>
            <span className={classes["light-size"]}>.</span>
            <span
              className={`${classes["light-size"]} ${classes["text-underline"]}`}
            >
              {props.time}
            </span>
          </div>
          <div className={classes["moreIcon-container"]}>
            <div className={styles["icons-area"]}>
              <BsThreeDots
                className={`${styles.blueItem} ${classes["interactionBar-icon"]}`}
                title="More"
              />
            </div>
          </div>
        </div>
        <div className={classes["tweetBox-body"]}>
          <p dir="auto">{props.tweetBody}</p>
          {props.tweetImg && (
            <div className={classes["tweetBox-image"]}>
              <img src={props.tweetImg} alt="Tweet body image" />
            </div>
          )}
        </div>
        <div className={classes.interactionBar}>
          <TweetBoxIcons reactions={props.reactions} />
        </div>
      </div>
    </Card>
  );
};

export default TweetBox;
