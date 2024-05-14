import React from "react";
import Styles from "../../styles/chatlist.module.scss";

interface Message {
  sender: string;
  receiver: string;
  content: string[];
  whoIsSending: string;
}

interface MessageListProps {
  messages: Message[];
}

const ChatList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className={Styles["message-list-wrapper"]}>
      {messages.map((message, index) => (
        <div className={Styles["message-list"]} key={index}>
          {message.content.map((cont) => (
            <div
              className={
                message.whoIsSending === "sender"
                  ? Styles["sender"]
                  : Styles["receiver"]
              }
            >
              {cont}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChatList;
