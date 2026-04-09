import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await getDocs(collection(db, "messages"));
      setMessages(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchMessages();
  }, []);

  const likeMessage = async (id, likes) => {
    const ref = doc(db, "messages", id);
    await updateDoc(ref, { likes: likes + 1 });
  };

  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>
          <p>{msg.text}</p>
          <button onClick={() => likeMessage(msg.id, msg.likes)}>
            ❤️ {msg.likes}
          </button>
        </div>
      ))}
    </div>
  );
}
