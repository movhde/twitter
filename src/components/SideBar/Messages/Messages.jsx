import { useState } from "react";
import { TbMessage2Plus } from "react-icons/tb";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import classes from "./Messages.module.css";
import styles from "../../Tweets/TweetPost/Icons.module.css";

const Messages = () => {
  const [isClicked, setIsClicked] = useState(false);

  const divClickHandler = () => {
    setIsClicked((prevState) => setIsClicked(!prevState));
  };

  return (
    <div
      onClick={divClickHandler}
      className={`${classes.messages} ${
        isClicked ? classes["expand-messages"] : ""
      } `}
    >
      <h3>Messages</h3>
      <div>
        <div className={styles["icons-area"]}>
          <TbMessage2Plus size={25} />
        </div>
        <div className={styles["icons-area"]}>
          <RiArrowUpDoubleLine size={25} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
