import React from "react";
import MemberList from "./MemberList";
import { PlusIcon, DownArrowIcon } from "../../icons";
import Styles from "../../styles/member.module.scss";
import { User1, User2, User3, User4, User5, User6 } from "../../images";

const Member: React.FC = () => {
  const totalMessages: number = 12;
  const memberList = [
    {
      name: "Elmer Laverty",
      displayMsg: "Haha oh man 🔥",
      tags: ["Question", "Help wanted"],
      image: User1,
      time: '12m'
    },
    {
      name: "Florencio Dorrance",
      displayMsg: "woohoooo",
      tags: ["Some content"],
      image: User2,
      time: '24m'
    },
    {
      name: "Lavern Laboy",
      displayMsg: "Haha that's terrifying 😂",
      tags: ["Bug", "Hacktoberfest"],
      image: User3,
      time: '1h'
    },
    {
      name: "Titus Kitamura",
      displayMsg: "omg, this is amazing",
      tags: ["Question", "Some content"],
      image: User4,
      time: '5h'
    },
    {
      name: "Geoffrey Mott",
      displayMsg: "aww 😍",
      tags: ["Request"],
      image: User5,
      time: '2d'
    },{
      name: "Alfonzo Schuessler",
      displayMsg: "perfect!",
      tags: ["Follow up"],
      image: User6,
      time: '1m'
    },
  ];

  return (
    <div className={Styles["member-container"]}>
      <div className={Styles["member-header"]}>
        <div className={Styles["member-header-text"]}>
          Messages <DownArrowIcon />
          <div className={Styles["member-count"]}>{totalMessages}</div>
        </div>
        <div>
          <PlusIcon data-testid="plus-icon" />
        </div>
      </div>
      <div className={Styles["member-search"]}>
        <input
          className={Styles["member-input"]}
          placeholder="Search messages"
        />
      </div>
      <div className={Styles["member-list"]}>
        <MemberList members={memberList} />
      </div>
    </div>
  );
};

export default Member;
