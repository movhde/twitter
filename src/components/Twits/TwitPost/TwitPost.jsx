import { TbPhoto } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";

import Avatar from "../../UI/Avatar";
import ReplyPermission from "./ReplyPermission";
import classes from "./TwitPost.module.css";
import Button from "../../UI/Button";
import { useState } from "react";

const ICONS = (
  <>
    <TbPhoto className={classes["attachment-icons"]} />
    <MdOutlineGifBox className={classes["attachment-icons"]} />
    <RiListRadio className={classes["attachment-icons"]} />
    <BsEmojiSmile className={classes["attachment-icons"]} />
    <TbCalendarTime className={classes["attachment-icons"]} />
    <SlLocationPin className={classes["attachment-icons"]} />
  </>
);

const TwitPost = () => {
  const [enteredText, setEnteredText] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText);
  };

  return (
    <div className={classes.twitPost}>
      <div className={classes.avatar}>
        <Avatar />
      </div>
      <div className={classes.twitBody}>
        <div className={classes.body}>
          <textarea
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
    </div>
  );
};

export default TwitPost;