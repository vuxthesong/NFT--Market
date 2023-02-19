import Navbar from "../Navbar/Navbar.js";
import styles from "./Home.scss";
import className from "classnames/bind";
import Button from "../Button/Button.js";

import logoText from "../../assets/heroText.png";
import hero from "../../assets/hero.png";

const cx = className.bind(styles);
function Home() {
  return (
    <div className={cx("container")}>
      <Navbar className={cx("nav")} />
      <div className={cx("header")}>
        <div className={cx("information")}>
          <h1>
            Export Our <img src={logoText} alt="logo text" /> Digital NFT Market
            Place
          </h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
          <div className={cx("btn")}>
            <Button text={"Explore"} blue />
            <Button text={"Create NFT"} />
          </div>
          <div className={cx("data")}>
            <div className={cx("data-tap")}>
              <h2>40K</h2>
              <p>Artwork</p>
            </div>
            <div className={cx("data-tap")}>
              <h2>12K</h2>
              <p>Auction</p>
            </div>
            <div className={cx("data-tap")}>
              <h2>20K</h2>
              <p>Artist</p>
            </div>
          </div>
        </div>
        <div className={cx("image")}>
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Home;
