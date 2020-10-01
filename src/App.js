import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "localhost:4000";

// https://www.valentinog.com/blog/socket-react/

// io.set("origins", ENDPOINT);

let socket;

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket = io(ENDPOINT);

    console.log("socket 1", socket);

    socket.on("connect", (data) => {
      console.log("a user connected");
      setResponse(data);
    });

    socket.on("message", (data) => {
      console.log("socket event", data);
      setResponse(data);
    });
    socket.on("disconnect", (data) => {
      console.log("socket disconnect", data);
      setResponse(data);
    });
  }, []);

  function emitMessage() {
    console.log("emitMessage");
    socket.emit("message", "Hello all");
  }

  return (
    <div>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
      <div>
        <button onClick={emitMessage}>Emit message</button>
      </div>
    </div>
  );
}

export default App;
