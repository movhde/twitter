import { BsThreeDots } from "react-icons/bs";
import classes from './TrendItem.module.css';
import styles from '../../Tweets/TweetPost/Icons.module.css';

const TrendItem = (props) => {
  return (
    <div className={classes.trendsBox}>
      <div className={classes.trendsBox__inner}>
        <div className={classes["trendBox-body"]}>
          <div>
            <span>{props.number}</span> <span>.</span> <span>{props.topic}</span> <span>.</span>{" "}
            <span>Trending</span>
          </div>
          <div className={styles["icons-area"]}>
            <BsThreeDots className={styles.blueItem} />
          </div>
        </div>
        <span>{props.hashtag}</span>
        <span>{props.posts}</span>
      </div>
    </div>
  );
};

export default TrendItem;
