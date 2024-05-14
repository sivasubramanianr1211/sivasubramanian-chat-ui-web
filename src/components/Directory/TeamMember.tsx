import React from "react";
import Styles from "../../styles/directory.module.scss";
import { DownloadIcon } from "../../icons";

interface Member {
  name: string;
  role: string;
  image: string;
}

interface File {
  text: string;
  subtext: string;
  size: string;
  image: JSX.Element;
}

interface TeamData {
  members: Member[];
  files: File[];
}

interface TeamMemberProps {
  memberFileData: TeamData;
}

const TeamMember: React.FC<TeamMemberProps> = ({ memberFileData }) => {
  const { members, files } = memberFileData;
  const totalMembers: number = 6;
  const totalFiles: number = 125;
  return (
    <div className={Styles["directory-wrapper"]}>
      <div className={Styles["team-member-list"]}>
        <div className={Styles["header"]}>
          Team Members{" "}
          <div className={Styles["member-count"]}>{totalMembers}</div>
        </div>
        {members.map((member) => (
          <div className={Styles["member-list-data-card"]} key={member.name}>
            <img src={member.image} alt={member.name} />
            <div className={Styles["text-wrapper"]}>
              <div className={Styles["text"]}>
                <div>{member.name}</div>
                <div className={Styles["subtext"]}>{member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={Styles["file-list"]}>
        <div className={Styles["file-header"]}>
          Files <div className={Styles["member-count"]}>{totalFiles}</div>
        </div>
        {files.map((member) => (
          <div className={Styles["member-list-data-card"]} key={member.text}>
            {member.image}
            <div className={Styles["text-wrapper"]}>
              <div className={Styles["text"]}>
                <div>{member.text}</div>
                <div className={Styles["subtext"]}>{member.subtext}</div>
                
              </div>
            </div>
            <div><DownloadIcon/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
