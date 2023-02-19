import React from "react";
import styles from "./Clients.scss";
import className from "classnames/bind";

import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";

const cx = className.bind(styles);
function Clients() {
  const clients = [client1, client2, client3, client4, client5];
  return (
    <div className={cx("client")}>
      {clients.map((client, index) => {
        return (
          <div className="client" key={index}>
            <img src={client} alt="client" />
          </div>
        );
      })}
    </div>
  );
}

export default Clients;
