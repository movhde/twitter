import { LuMessageCircle } from "react-icons/lu";
import { FaRetweet } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoStatsChart } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";

import classes from "./TweetBoxIcons.module.css";
import styles from "../TweetPost/Icons.module.css";
import { useState } from "react";

const TweetBoxIcons = (props) => {
  const [likedTweet, setLikedTweet] = useState(Number(props.reactions.like));
  const [isClicked, setIsClicked] = useState(false);

  const likeClickHandler = () => {
    setIsClicked((prevState) => !prevState);
    isClicked
      ? setLikedTweet((prevState) => (prevState -= 1))
      : setLikedTweet((prevState) => (prevState += 1));
  };

  return (
    <>
      <div className={classes["interaction-bar__item"]}>
        <div className={`${styles["icons-area"]} ${classes.blue}`}>
          <LuMessageCircle
            title="Reply"
            className={`${classes["interactionBar-icon"]} ${classes.blueItem}`}
          />
        </div>
        <div>
          <span className={classes.blueItem}>{props.reactions.reply}</span>
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
          <span className={classes.greenItem}>{props.reactions.retweet}</span>
        </div>
      </div>
      <div
        onClick={likeClickHandler}
        className={classes["interaction-bar__item"]}
      >
        <div className={`${styles["icons-area"]} ${classes.purple}`}>
          {isClicked ? (
            <GoHeartFill
              title="Like"
              className={`${classes["interactionBar-icon"]} ${classes.purpleItem} ${classes.fillLikeIcon}`}
            />
          ) : (
            <GoHeart
              title="Like"
              className={`${classes["interactionBar-icon"]} ${classes.purpleItem}`}
            />
          )}
        </div>
        <div>
          <span className={classes.purpleItem}>{likedTweet}</span>
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
          <span className={classes.blueItem}>{props.reactions.view}</span>
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
};

export default TweetBoxIcons;
