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
import Card from "../../UI/Card/Card";

const ICONS = (
  <>
    <div className={classes["attachment-icons-area"]}>
      <TbPhoto title="Media" className={classes["attachment-icons"]} />
    </div>
    <div className={classes["attachment-icons-area"]}>
      <MdOutlineGifBox title="Gif" className={classes["attachment-icons"]} />
    </div>
    <div className={classes["attachment-icons-area"]}>
      <RiListRadio title="Poll" className={classes["attachment-icons"]} />
    </div>
    <div className={classes["attachment-icons-area"]}>
      <BsEmojiSmile title="Emoji" className={classes["attachment-icons"]} />
    </div>
    <div className={classes["attachment-icons-area"]}>
      <TbCalendarTime title="Schedule" className={classes["attachment-icons"]} />
    </div>
    <div className={classes["attachment-icons-area"]}>
      <SlLocationPin title="Location" className={classes["attachment-icons"]} />
    </div>
  </>
);

const TwitPost = () => {
  const [enteredText, setEnteredText] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText);
  };

  return (
    <Card>
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
    </Card>
  );
};

export default TwitPost;
