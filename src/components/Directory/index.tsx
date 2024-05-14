import React from "react";
import Styles from "../../styles/directory.module.scss";
import { MoreIcon } from "../../icons";
import TeamMember from "./TeamMember";
import { Team1, Team2, Team3, Team4, Team5, Team6 } from "../../images";
import { PdfIcon, PngIcon, DocIcon, XxlIcon } from "../../icons";

const Directory: React.FC = () => {
  const members = [
    {
      name: "Florencio Dorrance",
      role: "Market Development Manager",
      image: Team1,
    },
    {
      name: "Benny Spanbauer",
      role: "Area Sales Manager",
      image: Team2,
    },
    {
      name: "Jamel Eusebio",
      role: "Administrator",
      image: Team3,
    },
    {
      name: "Lavern Laboy",
      role: "Account Executive",
      image: Team4,
    },
    {
      name: "Alfonzo Schuessler",
      role: "Proposal Writer",
      image: Team5,
    },
    {
      name: "Daryl Nehls",
      role: "Nursing Assistant",
      image: Team6,
    },
  ];
  const files = [
    {
      text: "i9.pdf",
      subtext: "PDF",
      size: '9mb',
      image: <PdfIcon/>,
    },
    {
      text: "Screenshot-3817.png",
      subtext: "PNG",
      size: '4mb',
      image: <PngIcon/>,
    },
    {
      text: "sharefile.docx",
      subtext: "DOC",
      size: '555kb',
      image: <DocIcon/>,
    },
    {
      text: "Jerry-2020_I-9_Form.xxl",
      subtext: "XXL",
      size: '24mb',
      image: <XxlIcon/>,
    }
  ];
  const memberFileData = {
    members,
    files
  }
  return (
    <div className={Styles["directory-container"]}>
      <div className={Styles["directory-header"]}>
        <div>Directory </div>
        <MoreIcon />
      </div>
      <TeamMember memberFileData={memberFileData} />
    </div>
  );
};

export default Directory;
