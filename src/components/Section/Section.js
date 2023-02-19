import sell1 from "../../assets/sell1.png";
import sell2 from "../../assets/sell2.png";
import sell3 from "../../assets/sell3.png";
import Button from "../Button/Button";

import className from "classnames/bind";
import styles from "./Section.scss";

const cx = className.bind(styles);
function Section() {
  const data = [
    {
      image: sell1,
      title: "Create your collection",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Create",
    },
    {
      image: sell2,
      title: "Add your NFTs",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Add NFT",
    },
    {
      image: sell3,
      title: "List them for sale",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      buttonText: "Sell Now",
    },
  ];

  return (
    <div className={cx("container-section")}>
      <div className={cx("title")}>
        <h2>Create and Sell Your NFTs</h2>
      </div>
      <div className={cx("content")}>
        {data.map(({ image, title, description, buttonText }, index) => {
          return (
            <div className={cx("createAndSell")} key={index}>
              <div className={cx("image")}>
                <img src={image} alt="create and sell" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>

              <Button text={buttonText} blue={index === 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section;
