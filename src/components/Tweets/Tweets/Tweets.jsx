import TweetBox from "../TweetBox/TweetBox";
import TweetPost from "../TweetPost/TweetPost";
import classes from './Tweets.module.css'

const Tweets = () => {
  return (
    <div className={classes.tweets}>
      <TweetPost />
      <TweetBox />
    </div>
  )
}

export default Tweets;