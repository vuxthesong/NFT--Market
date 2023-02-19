import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import classNames from "classnames/bind";
import styles from "./Footer.scss";

const cx = classNames.bind(styles);
function Footer() {
  const servicesLinks = ["Art", "Common", "Trading", "Rare", "Generic"];
  const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
  const contactInfo = [
    {
      icon: <MdEmail />,
      value: "kishanshet21@gmail.com",
    },
    {
      icon: <MdPhoneInTalk />,
      value: "+(480) 555-0103",
    },
    {
      icon: <IoLocationSharp />,
      value: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ];
  const socialIcons = [
    <AiFillFacebook />,
    <FaTwitterSquare />,
    <BsLinkedin />,
    <FaInstagramSquare />,
  ];

  return (
    <div className={cx("footer")}>
      <div className={cx("row")}>
        <div className={cx("brand")}>
          <img src={logo} alt="logo" />
        </div>
        <p className={cx("description")}>
          1901 Thornridge Cir. Shiloh, Hawaii 81063
        </p>
        <div className={cx("social-icons")}>
          {socialIcons.map((icon) => {
            return <div className={cx("icon")}>{icon}</div>;
          })}
        </div>
      </div>
      <div className={cx("row")}>
        <h3>Our Services</h3>
        <ul className={cx("list")}>
          {servicesLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className={cx("row")}>
        <h3>Company</h3>
        <ul className={cx("list")}>
          {companyLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className={cx("row")}>
        <h3>Contact Us</h3>
        <ul>
          {contactInfo.map(({ icon, value }) => {
            return (
              <li>
                <div className={cx("icon")}>{icon}</div>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
