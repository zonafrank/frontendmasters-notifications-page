import React, { useState } from "react";
import data from "../../data/notifications.data.json";
import Footer from "../footer/footer.component";
import Notification from "../notification/notification.component";
import "./notifications.style.css";

const Notifications = () => {
  const [notifications, setNotifications] = useState(data);

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((n) => ({
      ...n,
      unread: false,
    }));

    setNotifications(updatedNotifications);
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="container">
      <div className="notifications-summary">
        <div>
          <span className="notifications-title">Notifications</span>{" "}
          <span className="unread-count">{unreadCount}</span>
        </div>
        <div className="mark-as-read" onClick={markAllAsRead}>
          Mark all as read
        </div>
      </div>
      {notifications.map((d) => {
        return <Notification key={d.id} notification={d} />;
      })}
      <Footer />
    </div>
  );
};

export default Notifications;
