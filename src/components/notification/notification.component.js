import React from "react";
import "./notification.style.css";

const Notification = ({ notification }) => {
  function createMessage() {
    const entityType = notification.typeDetails?.entityType;
    const entityDetail = notification.typeDetails?.entityDetail;

    if (notification.type === "reaction") {
      return (
        <span className="notification-action">
          {`reacted to your recent ${entityType}`}{" "}
          <span className="highlight-dark-gray">{`${entityDetail}`}</span>
        </span>
      );
    } else if (notification.type === "follow") {
      return <span className="notification-action">{`followed you`}</span>;
    } else if (notification.type === "join" || notification.type === "left") {
      const type = notification.type;
      return (
        <span className="notification-action">
          {`has ${`${
            type === "join" ? "joined" : "left"
          }`} your group ${entityType}`}{" "}
          <span className="highlight-blue">{`${entityDetail}`}</span>
        </span>
      );
    } else if (notification.type === "message") {
      return (
        <span className="notification-action">
          has sent you a private message
        </span>
      );
    } else if (notification.type === "comment") {
      return (
        <span className="notification-action">
          has commented on your picture{" "}
          <img
            className="notification-image right"
            src={require(`../../assets/${entityDetail}`)}
            alt="your avatar"
          />
        </span>
      );
    } else {
      return <span>Invalid action type</span>;
    }
  }

  if (!notification) {
    return null;
  }

  return (
    <div className={`notification${notification.unread ? " unread" : ""}`}>
      <div className="notification-image-container">
        <img
          className="notification-image"
          src={require(`../../assets/images/${notification.avatar}`)}
          alt="poster"
        />
      </div>
      <div className="notification-details">
        <div className={notification.type === "comment" ? "comment" : ""}>
          <span className="notification-name">{notification.name}</span>{" "}
          {createMessage()}{" "}
          {notification.unread ? (
            <span className="unread-notificaition"></span>
          ) : (
            ""
          )}
        </div>
        <div className="notification-time">{notification.time}</div>
        {notification.other_details ? (
          <div className="notification-other">{notification.other_details}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Notification;
