import Header from "../Header/Header";
import TweetBox from "../TweetBox/TweetBox";
import TweetPost from "../TweetPost/TweetPost";
import classes from "./Tweets.module.css";
import image from '../../../assets/movahedeProfile.jpg'

const TWEETS = [
  {
    username: "sajjad",
    userId: "@_Nakhodaye",
    time: "13h",
    tweetBody: "بدنه توییت اول.",
    image: image,
  },
  {
    username: "آدم",
    userId: "@movhde",
    time: "1h",
    tweetBody: "بدنه توییت دوم.",
    image: image,
  },
  {
    username: "mahla",
    userId: "@_dokhtarok",
    time: "Nov 15",
    tweetBody: "بدنه توییت سوم.",
    image: image,
  },
  {
    username: "arezoo",
    userId: "@some_one",
    time: "Nov 14",
    tweetBody:
      "a test tweet. some random text here.some random text here.some random text here.some random text here.some random text here.some random text here.some random text here.",
    image: image,
  },
  {
    username: "hossein",
    userId: "@fer_feri",
    time: "4h",
    tweetBody:
      "سلام وقتتون بخیر. ایشالا که سالم و سلامت باشید این بدنه قراره طولانی باشه خدانگهدار.",
    image: image,
  },
];

const Tweets = () => {
  return (
    <div className={classes.tweets}>
      <Header />
      <TweetPost />
      {TWEETS.map((tweet) => (
        <TweetBox
          key={tweet.userId}
          username={tweet.username}
          userId={tweet.userId}
          time={tweet.time}
          tweetBody={tweet.tweetBody}
          image={tweet.image}
        />
      ))}
    </div>
  );
};

export default Tweets;
