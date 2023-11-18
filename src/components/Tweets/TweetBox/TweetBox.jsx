import { BsThreeDots } from "react-icons/bs";
import { LuMessageCircle } from "react-icons/lu";
import { FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";

import Avatar from "../../UI/Avatar";
import Card from "../../UI/Card/Card";
import classes from "./TweetBox.module.css";
import styles from "../TweetPost/Icons.module.css";

const ICONS = (
  <>
    <div className={classes["interaction-bar__item"]}>
      <div className={`${styles["icons-area"]} ${classes.blue}`}>
        <LuMessageCircle
          title="Reply"
          className={`${classes["interactionBar-icon"]} ${classes.blueItem}`}
        />
      </div>
      <div>
        <span className={classes.blueItem}>120</span>
      </div>
    </div>
    <div className={classes["interaction-bar__item"]}>
      <div className={`${styles["icons-area"]} ${classes.green}`}>
        <FaRetweet
          title="Repost"
          className={`${classes["interactionBar-icon"]} ${classes.greenItem}`}
        />
      </div>
      <div>
        <span className={classes.greenItem}>10</span>
      </div>
    </div>
    <div className={classes["interaction-bar__item"]}>
      <div className={`${styles["icons-area"]} ${classes.purple}`}>
        <GoHeart
          title="Like"
          className={`${classes["interactionBar-icon"]} ${classes.purpleItem}`}
        />
      </div>
      <div>
        <span className={classes.purpleItem}>230</span>
      </div>
    </div>
    <div className={classes["interaction-bar__item"]}>
      <div className={`${styles["icons-area"]} ${classes.blue}`}>
        <IoStatsChart
          title="View"
          className={`${classes["interactionBar-icon"]} ${classes.blueItem}`}
        />
      </div>
      <div>
        <span className={classes.blueItem}>23</span>
      </div>
    </div>
    <div className={classes["independent-icons"]}>
      <div className={styles["icons-area"]}>
        <FaRegBookmark
          className={`${classes["interactionBar-icon"]} ${styles.blueItem}`}
          title="Bookmark"
        />
      </div>
      <div className={styles["icons-area"]}>
        <FiUpload
          className={`${classes["interactionBar-icon"]} ${styles.blueItem}`}
          title="Share"
        />
      </div>
    </div>
  </>
);

const TweetBox = (props) => {
  return (
    <Card className="backdrop">
      <div className={classes.avatar}>
        <Avatar src={props.image} />
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
              <BsThreeDots color="gray" title="More" />
            </div>
          </div>
        </div>
        <div className={classes["tweetBox-body"]}>
          <p dir="auto">{props.tweetBody}</p>
        </div>
        <div className={classes.interactionBar}>{ICONS}</div>
      </div>
    </Card>
  );
};

export default TweetBox;
