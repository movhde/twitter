import Wrapper from "../Wrapper/Wrapper";
import TrendItem from "./TrendItem";
import classes from "./TrendsBox.module.css";

const TRENDS = [
  {
    number: "1",
    topic: "Politics",
    hashtag: "#Port3",
    posts: "200k posts",
  },
  {
    number: "2",
    topic: "Politics",
    hashtag: "#Port3",
    posts: "200k posts",
  },
  {
    number: "3",
    topic: "Politics",
    hashtag: "#Israel",
    posts: "214K posts",
  },
  {
    number: "4",
    topic: "Politics",
    hashtag: "Biden",
    posts: "1.02M posts",
  },
  {
    number: "5",
    topic: "Politics",
    hashtag: "Trump",
    posts: "3,455 posts",
  },
];

const TrendsBox = () => {
  return (
    <Wrapper>
      <div className={classes["trendsBox-title"]}>
        <span>Iran Trends</span>
      </div>
      {TRENDS.map((trend) => (
        <TrendItem
          key={trend.number}
          number={trend.number}
          topic={trend.topic}
          hashtag={trend.hashtag}
          posts={trend.posts}
        />
      ))}
      <div className={classes["show-more"]}>
        <span>Show more</span>
      </div>
    </Wrapper>
  );
};

export default TrendsBox;
