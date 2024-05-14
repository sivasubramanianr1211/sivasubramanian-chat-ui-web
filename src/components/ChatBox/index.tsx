import React from "react";
import Header from "./header";
import ChatList from "./ChatList";
import Styles from "../../styles/chatbox.module.scss";
import { AttachmentIcon } from "../../icons";

const ChatBox: React.FC = () => {
  const messages = [
    {
      sender: "sender1",
      receiver: "receiver1",
      content: [
        "omg, this is amazing",
        "perfect! ✅",
        "Wow, this is really epic",
      ],
      whoIsSending: "sender",
    },
    {
      sender: "receiver1",
      receiver: "sender1",
      content: ["How are you?"],
      whoIsSending: "receiver",
    },
    {
      sender: "sender2",
      receiver: "receiver2",
      content: ["just ideas for next time", "I'll be there in 2 mins ⏰"],
      whoIsSending: "sender",
    },
    {
      sender: "receiver2",
      receiver: "sender2",
      content: ["woohoooo", "Haha oh man", "Haha that's terrifying 😂"],
      whoIsSending: "receiver",
    },
    {
      sender: "sender2",
      receiver: "receiver2",
      content: ["aww", "omg, this is amazing", "woohoooo 🔥"],
      whoIsSending: "sender",
    },
  ];

  return (
    <div>
      <div className={Styles["chatbox-container"]}>
        <Header />
        <div className={Styles["chatbox-content"]}>
          <div className={Styles["chatbox-content-scrollable"]}>
            <ChatList messages={messages} />
          </div>
          <div className={Styles["input-box"]}>
            <div
              className={Styles["input-attachment"]}
              style={{ padding: "24px", display: "flex" }}
            >
              <AttachmentIcon />
              <input type="text" placeholder="Type a message" />
            </div>
          </div>
        </div>
        <div className={Styles["input-wrapper"]}></div>
      </div>
    </div>
  );
};

export default ChatBox;
