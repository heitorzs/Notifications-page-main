import React, { useEffect, useState } from 'react';
import './App.css';
import markwebber from './images/avatar-mark-webber.webp'
import angelagray from './images/avatar-angela-gray.webp'
import anna from './images/avatar-anna-kim.webp'
import jacob from './images/avatar-jacob-thompson.webp'
import kimberly from './images/avatar-kimberly-smith.webp'
import nathan from './images/avatar-nathan-peterson.webp'
import rizky from './images/avatar-rizky-hasanuddin.webp'
import chess from './images/image-chess.webp'

function App() {
  const [messages, setMessages] = useState([
    {
      name: "Mark Webber",
      avatar: markwebber,
      mes: "reacted to your recent post My first tournament today!",
      when: '1m ago',
      isRead: false
    },

    {
      name: "Angela Gray",
      avatar: angelagray,
      mes: "followed you",
      when: '5m ago',
      isRead: false
    },

    {
      name: "Jacob Thompson",
      avatar: jacob,
      mes: "has joined your group Chess Club",
      when: '1 day ago',
      isRead: false
    },

    {
      name: "Rizky Hasanuddin",
      avatar: rizky,
      mes: "sent you a private message" + "Hello, thanks for setting up the Chess Club.I`ve been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      when: '5 days ago',
      isRead: false
    },

    {
      name: "Kimberly Smith",
      avatar: kimberly,
      mes: "commented on your picture",
      when: "1 week ago",
      pic: chess,
      isRead: false
    },

    {
      name: "Nathan Peterson",
      avatar: nathan,
      mes: " reacted to your recent post 5 end - game strategies to increase your win rate",
      when: "2 weeks ago",
      isRead: false
    },

    {
      name: "Anna Kim",
      avatar: anna,
      mes: " left the group Chess Club",
      when: "2 weeks ago",
      isRead: false
    }
  ]);

  const [notifications, setNotifications] = useState(0)

  function handleRead(index) {
    const updateMessages = [...messages];
    updateMessages[index].isRead = !updateMessages[index].isRead;
    console.log(updateMessages[index].isRead)
    setMessages(updateMessages);
  }

  function markAllRead() {
    const read = [...messages];
    read.forEach((message) => message.isRead = true)
    setMessages(read)
  }

  useEffect(() => {
    const unreadCount = messages.filter((mes) => !mes.isRead).length
    console.log(unreadCount)
    setNotifications(unreadCount)
  }, [messages])

  return (
    <div className="App">
      <div className='notifications'>
        <h1>Notifications {notifications}</h1>
        <button className="button" onClick={markAllRead}>Mark all as read</button>
      </div>
      <div className='container'>
        {messages.map((m, index) =>
          <div key={m.name}
            className={`message ${m.isRead ? 'read' : 'unread'}`}
            onClick={() => handleRead(index)}>
            <div>
              <img src={m.avatar} alt='avatar' />
            </div>
            <div className="text">
              <p><b>{m.name}  </b>{m.mes}</p>
              <p>{m.when}</p>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
