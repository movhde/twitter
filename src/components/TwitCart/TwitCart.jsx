import { TbPhoto } from "react-icons/tb";
import { MdOutlineGifBox } from "react-icons/md";
// import { BiPoll } from "react-icons/bi";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import { FaEarthAmericas } from "react-icons/fa6";

import Avatar from "../UI/Avatar";
import classes from "./TwitCart.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const ICONS = (
  <>
    <TbPhoto className={classes["icons__icon"]} />
    <MdOutlineGifBox className={classes["icons__icon"]} />
    {/* <BiPoll className={classes['icons__icon']} /> */}
    <RiListRadio className={classes["icons__icon"]} />
    <BsEmojiSmile className={classes["icons__icon"]} />
    <TbCalendarTime className={classes["icons__icon"]} />
    <SlLocationPin className={classes["icons__icon"]} />
  </>
);

const TwitCart = () => {
  const [enteredText, setEnteredText] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredText(event.target.value);
    console.log(enteredText);
  };

  const additionalDiv = (
    <div className={classes.additional}>
      <div>
        <FaEarthAmericas className={classes.earthIcon} />
        <span>Every one can reply</span>
      </div>
    </div>
  );

  return (
    <div className={classes.twitContainer}>
      <div className={classes.avatar}>
        <Avatar />
      </div>
      <div className={classes.twitBody}>
        <div className={classes.body}>
          <textarea
            value={enteredText}
            onChange={inputChangeHandler}
            rows={1}
            type="text"
            placeholder="What is happening?!"
          />
          {enteredText && additionalDiv}
        </div>
        <div className={classes.navigateBar}>
          <div className={classes.icons}>{ICONS}</div>
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

export default TwitCart;