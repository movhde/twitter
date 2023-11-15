import { FaEarthAmericas } from "react-icons/fa6";

import classes from './ReplyPermission.module.css';

const replyPermission = () => {
  return (
    <div className={classes.replyPermission}>
      <div>
        <FaEarthAmericas className={classes.earthIcon} />
        <span>Every one can reply</span>
      </div>
    </div>
  );
};

export default replyPermission;
