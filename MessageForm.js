import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

export default function MessageForm() {
  const [text, setText] = useState("");

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text,
      likes: 0
    });
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
