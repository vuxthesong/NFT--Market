import classNames from "classnames/bind";
import styles from "./Choose.scss";
import Button from "../Button/Button";
import choose from "../../assets/choose.png";

const cx = classNames.bind(styles);
function Choose() {
  return (
    <div className={cx("choose")}>
      <div className={cx("image")}>
        <img src={choose} alt="choose" />
      </div>
      <div className={cx("content")}>
        <h2>Why should you Choose Our Website ?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Button text="Read More" blue />
      </div>
    </div>
  );
}

export default Choose;
