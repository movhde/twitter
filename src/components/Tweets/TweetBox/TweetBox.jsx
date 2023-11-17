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
    <div className={styles["icons-area"]}>
      <LuMessageCircle
        title="Reply"
        className={classes["interactionBar-icon"]}
      />
    </div>
    <div className={styles["icons-area"]}>
      <FaRetweet title="Repost" className={classes["interactionBar-icon"]} />
    </div>
    <div className={styles["icons-area"]}>
      <GoHeart title="Like" className={classes["interactionBar-icon"]} />
    </div>
    <div className={styles["icons-area"]}>
      <IoStatsChart title="View" className={classes["interactionBar-icon"]} />
    </div>
    <div className={classes["independent-icons"]}>
      <div className={styles["icons-area"]}>
        <FaRegBookmark
          className={classes["interactionBar-icon"]}
          title="Bookmark"
        />
      </div>
      <div className={styles["icons-area"]}>
        <FiUpload className={classes["interactionBar-icon"]} title="Share" />
      </div>
    </div>
  </>
);

const TweetBox = () => {
  return (
    <Card>
      <div className={classes.avatar}>
        <Avatar />
      </div>
      <div className={classes.tweetBox}>
        <div className={classes.tweetInfo}>
          <div className={classes["tweetInfo-inner"]}>
            <span className={classes["text-underline"]}>sajjad</span>
            <span className={classes["light-size"]}>@_nakhodayebinam</span>
            <span className={classes["light-size"]}>.</span>
            <span
              className={`${classes["light-size"]} ${classes["text-underline"]}`}
            >
              13h
            </span>
          </div>
          <div className={classes["moreIcon-container"]}>
            <div className={styles["icons-area"]}>
              <BsThreeDots color="gray" title="More" />
            </div>
          </div>
        </div>
        <div className={classes["tweetBox-body"]}>
          <p>Some random tweet</p>
        </div>
        <div className={classes.interactionBar}>{ICONS}</div>
      </div>
    </Card>
  );
};

export default TweetBox;
