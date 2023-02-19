import styles from "./Button.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

function Button({ text, blue = false }) {
  return (
    <div>
      <button className={cx(`${blue ? "blue" : ""}`)}>{text}</button>
    </div>
  );
}

export default Button;
