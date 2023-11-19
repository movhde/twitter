import billPic from "../../../assets/bill.jpg";
import adelePic from "../../../assets/adele.jpg";
import alirezaPic from "../../../assets/alirezaghorbani.jpg";
import taherPic from "../../../assets/taher.jpg";
import jadiPic from "../../../assets/jadi.jpg";
import poster from "../../../assets/poster.jpg";
import meals from "../../../assets/meals.jpg";

import Header from "../Header/Header";
import TweetBox from "../TweetBox/TweetBox";
import TweetPost from "../TweetPost/TweetPost";
import classes from "./Tweets.module.css";

const TWEETS = [
  {
    username: "Taher Ghoreyshi",
    userId: "@taher_gh",
    time: "Nov 14",
    tweetBody: "سلام بر طاهر عزیز و گرامی.",
    avatar: taherPic,
  },
  {
    username: "Bill Gates",
    userId: "@BillGates",
    time: "1h",
    tweetBody: "a random tweet.",
    avatar: billPic,
    tweetImg: "",
  },
  {
    username: "Alireza Ghorbani",
    userId: "@arghorbani51",
    time: "13h",
    tweetBody:
      "با افتخار در تاریخ ۳۰ و ۳۱ خرداد ماه میزبان مردم گرامی استان تهران هستیم.",
    avatar: alirezaPic,
    tweetImg: poster,
  },
  {
    username: "Adele",
    userId: "@Adele",
    time: "Nov 15",
    tweetBody: "My new album is available on all platforms!",
    avatar: adelePic,
    tweetImg: "",
  },
  {
    username: "jadi",
    userId: "@jadi",
    time: "4h",
    tweetBody: "بفرمایید شام",
    avatar: jadiPic,
    tweetImg: meals,
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
          avatar={tweet.avatar}
          tweetImg={tweet.tweetImg}
        />
      ))}
    </div>
  );
};

export default Tweets;
