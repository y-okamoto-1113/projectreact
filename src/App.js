import React, {useState} from "react";
import Tweet from "./Tweet";

function App(){

  const [users, setUsers] = useState([
    {name: "yuki", message: "Hello there!"},
    {name: "John Snow", message: "I am the true King!"},
    {name: "Edward Stark", message: "Winter is Coming!"},
  ])

  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}


export default App;
