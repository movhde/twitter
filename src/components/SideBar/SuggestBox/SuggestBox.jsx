import alirezaPic from "../../../assets/alirezaghorbani.jpg";
import taherPic from "../../../assets/taher.jpg";
import jadiPic from "../../../assets/jadi.jpg";

import Wrapper from "../Wrapper/Wrapper";
import SuggestAccount from "./SuggestAccount";
import classes from "./SuggestBox.module.css";

const INFO = [
  {
    image: alirezaPic,
    user: "Alireza Ghorbani",
    userId: "@arghorbani51",
  },
  {
    image: jadiPic,
    user: "jadi",
    userId: "@jadi",
  },
  {
    image: taherPic,
    user: "Taher Ghoreyshi",
    userId: "@taher_gh",
  },
];

const SuggestBox = () => {
  return (
    <Wrapper>
      <div className={classes["suggestBox-title"]}>
        <span>Who to follow</span>
      </div>
      {INFO.map((item) => (
        <SuggestAccount
          key={item.userId}
          userName={item.user}
          userId={item.userId}
          image={item.image}
        />
      ))}
      <div className={classes["show-more"]}>
        <span>Show more</span>
      </div>
    </Wrapper>
  );
};

export default SuggestBox;
