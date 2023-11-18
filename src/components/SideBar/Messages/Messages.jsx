import { TbMessage2Plus } from "react-icons/tb";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import classes from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={classes.messages}>
      <h3>Messages</h3>
      <div>
        <TbMessage2Plus size={25} />
        <RiArrowUpDoubleLine size={25} />
      </div>
    </div>
  );
};

export default Messages;
