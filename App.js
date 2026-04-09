import React from "react";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

function App() {
  return (
    <div>
      <h1>Unsent</h1>
      <MessageForm />
      <MessageList />
    </div>
  );
}

export default App;
