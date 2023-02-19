import Button from "../Button/Button";
import classNames from "classnames/bind";
import styles from "./MarketPlace.scss";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import marketplace1 from "../../assets/marketplace1.png";
import marketplace2 from "../../assets/marketplace2.png";
import marketplace3 from "../../assets/marketplace3.png";
import marketplace4 from "../../assets/marketplace4.png";
import marketplace5 from "../../assets/marketplace5.png";
import marketplace6 from "../../assets/marketplace6.png";
import marketplace7 from "../../assets/marketplace7.png";
import marketplace8 from "../../assets/marketplace8.png";

const cx = classNames.bind(styles);
function MarketPlace() {
  const marketPlaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
    },
    {
      image: marketplace2,
      name: "Pedram-mohamm...",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
    },
    {
      image: marketplace6,
      name: "Hoang-l-p-solan",
    },
    {
      image: marketplace7,
      name: "Joshua-jay",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
    },
  ];
  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];

  return (
    <div className={cx("market-place")}>
      <div className="title">
        <h2>NFT Marketplace</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <div className={cx("marketPlaceTypes")}>
        {marketPlaceType.map((text, index) => {
          return <Button text={text} key={index} blue={index === 0} />;
        })}
      </div>
      <div className={cx("marketPlaces")}>
        {marketPlaceData.map(({ image, name }) => {
          return (
            <di className={cx("container-place")}>
              <div className={cx("marketplace")}>
                <div className={cx("image")}>
                  <img src={image} alt="marketplace" />
                </div>
                <div className={cx("name")}>
                  <h4>{name}</h4>
                  <BsThreeDots />
                </div>
                <h6 className={cx("username")}>@koolkishansheth</h6>
                <div className={cx("price-container")}>
                  <h5 className={cx("price")}>5.5ETH</h5>
                  <FaEthereum />
                </div>
              </div>
            </di>
          );
        })}
      </div>
    </div>
  );
}

export default MarketPlace;
