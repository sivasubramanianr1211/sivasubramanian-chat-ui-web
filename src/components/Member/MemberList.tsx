import React from "react";
import Styles from "../../styles/member.module.scss";

interface Member {
  name: string;
  displayMsg: string;
  tags: string[];
  image: string;
  time: string;
}

interface MemberListProps {
  members: Member[];
}

const MemberList: React.FC<MemberListProps> = ({ members }) => {
  return (
    <div className={Styles["member-list-data"]}>
      {members.map((member) => (
        <div className={Styles["member-list-data-card"]} key={member.name}>
          <img
            className={Styles["image"]}
            src={member.image}
            alt={member.name}
          />
          <div className={Styles["text-wrapper"]}>
            <div className={Styles["text"]}>
              <div>{member.name}</div>
              <div className={Styles["subtext"]}>{member.displayMsg}</div>
            </div>
            <div>{member.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberList;
