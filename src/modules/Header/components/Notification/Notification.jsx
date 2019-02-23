import React from 'react';

const Notification = () => {
  return (
    <div className="notification">
      <a href="#" className="notification__link">
        <img src="assets/img/notification.svg" alt="notification" className="notification__icon"/>
          <div className="notification__counter"><span className="notification__count">1</span></div>
      </a>
    </div>
  );
};

export default Notification;