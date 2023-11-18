import { TbPhoto } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

import Avatar from "../../UI/Avatar";
import ReplyPermission from "./ReplyPermission";
import classes from "./TweetPost.module.css";
import Button from "../../UI/Button";
import { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from "./Icons.module.css";
import image from '../../../assets/movahedeProfile.jpg'

const ICONS = (
  <>
    <div className={styles["icons-area"]}>
      <TbPhoto title="Media" className={styles.icons} />
    </div>
    <div className={styles["icons-area"]}>
      <MdOutlineGifBox title="Gif" className={styles.icons} />
    </div>
    <div className={styles["icons-area"]}>
      <RiListRadio title="Poll" className={styles.icons} />
    </div>
    <div className={styles["icons-area"]}>
      <BsEmojiSmile title="Emoji" className={styles.icons} />
    </div>
    <div className={styles["icons-area"]}>
      <TbCalendarTime title="Schedule" className={styles.icons} />
    </div>
    <div className={styles["icons-area"]}>
      <SlLocationPin title="Location" className={styles.icons} />
    </div>
  </>
);

const TweetPost = () => {
  const [enteredText, setEnteredText] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText);
  };

  return (
    <Card>
      <div className={classes.avatar}>
        <Avatar src={image} />
      </div>
      <div className={classes.tweetBody}>
        <div className={classes.body}>
          <textarea
            dir="auto"
            value={enteredText}
            onChange={inputChangeHandler}
            rows={2}
            type="text"
            placeholder="What is happening?!"
          />
          {enteredText && <ReplyPermission />}
        </div>
        <div className={classes.attachBar}>
          <div className={classes.attachment}>{ICONS}</div>
          <div className={classes.postBtn}>
            <Button width="small" className={enteredText ? "" : "disable"}>
              Post
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TweetPost;
