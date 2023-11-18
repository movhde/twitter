import Wrapper from "../Wrapper/Wrapper";
import image from "../../../assets/movahedeProfile.jpg";
import classes from "./SuggestBox.module.css";
import SuggestAccount from "./SuggestAccount";

const INFO = [
  {
    image: image,
    user: "movahede",
    userId: "@_movhde",
  },
  {
    image: image,
    user: "amir",
    userId: "@en_san",
  },
  {
    image: image,
    user: "حصین",
    userId: "@_oskolBache",
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
