import classNames from "classnames/bind";
import styles from "./Subscribe.scss";
import subscribe from "../../assets/subscribe.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const cx = classNames.bind(styles);
function Subscribe() {
  return (
    <div className={cx("subscribe")}>
      <div className={cx("content")}>
        <h2>Subscribe for Get update every New Offers</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
        <div className={cx("input-container")}>
          <input type="text" placeholder="Enter Email" />
          <BsFillArrowRightCircleFill />
        </div>
      </div>
      <div className={cx("image")}>
        <img src={subscribe} alt="subscribe" />
      </div>
    </div>
  );
}

export default Subscribe;
