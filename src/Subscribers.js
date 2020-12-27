import React, { useState } from "react";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([
    {
      id: 1,
      name: "Maxwell Kapezi",
      email: "maxwellkjr@gmail.com",
    },
    {
      id: 2,
      name: "Mad Max",
      email: "madmax@gmail.com",
    },
    {
      id: 3,
      name: "MJ Crimson",
      email: "crimson@gmail.com",
    },
    {
      id: 4,
      name: "John Crimson",
      email: "cjay@gmail.com",
    },
  ]);

  return (
    <div className="container">
      {subscribers.map((subscriber) => (
        <h1>{subscriber.name}</h1>
      ))}
    </div>
  );
};

export default Subscribers;
