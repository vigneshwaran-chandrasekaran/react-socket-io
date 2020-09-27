import React, { useEffect, useState } from "react";
import io from "socket.io-client";
const ENDPOINT = "wss://echo.websocket.org/";

// https://www.valentinog.com/blog/socket-react/

// io.set("origins", ENDPOINT);

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT);

    console.log("socket 1", socket);

    socket.on("connect", (data) => {
      console.log("a user connected");
      setResponse(data);
    });

    socket.on("event", (data) => {
      console.log("socket event", data);
      setResponse(data);
    });
    socket.on("disconnect", (data) => {
      console.log("socket disconnect", data);
      setResponse(data);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;
