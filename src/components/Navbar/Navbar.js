import styles from "./Navbar.scss";
import logo from "../../assets/logo.png";
import className from "classnames/bind";
import Button from "../Button/Button";

const cx = className.bind(styles);

function Navbar() {
  return (
    <div className={cx("nav")}>
      <div className={cx("brand")}>
        <img src={logo} alt="logo" />
      </div>
      <div className={cx("links")}>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="maketplace">Marketplace</a>
          </li>
          <li>
            <a href="sellers">Sellers</a>
          </li>
          <li>
            <a href="create">Create</a>
          </li>
        </ul>
      </div>
      <div className={cx("btn")}>
        <Button text="Contact" />
      </div>
    </div>
  );
}

export default Navbar;
