import "./App.css";

import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [users, setusers] = useState([]);
  async function fetchUser() {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const allUser = await response.json();
    setusers(allUser.results);
  }
  useEffect(function () {
    fetchUser();
  }, []);
  return (
    <div>
      {users.map(function (item) {
        return (
          <div
            className="name"
            style={{ backgroundColor: "lightblue", justifyContent: "center" }}
          >
            {" "}
            {item.name.title} {item.name.first} {item.name.last}
            {", "}
            {item.location.city}
          </div>
        );
      })}
    </div>
  );
}

export default App;
