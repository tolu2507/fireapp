import "./App.css";
import { useEffect, useState } from "react";
import {
  addToDatabase,
  createUser,
  detailRef,
  ListItem,
  logoutUser,
  signInUser,
  signInWithGoogle,
} from "./function";
import { onSnapshot } from "firebase/firestore";

function App() {
  const detail = { title: "", content: "" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState(detail);

  const [Items, setItems] = useState([]);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleTitleDetailsChange(e) {
    setDetails({ ...details, title: e.target.value });
  }
  function handleContentDetailsChange(e) {
    setDetails({ ...details, content: e.target.value });
  }

  useEffect(() => {
    function getData() {
      onSnapshot(detailRef, (data) => {
        setItems(
          data.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        );
      });
    }

    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <div>
          <input type="email" value={email} onChange={handleEmailChange} />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          onClick={() => {
            createUser(email, password);
          }}
        >
          SignUp
        </button>
        <button
          onClick={() => {
            signInUser(email, password);
          }}
        >
          SignIn
        </button>
        <button
          onClick={logoutUser}
        >
          SignOut
        </button>
      </div>
      <pre></pre>
      <div>
        <button onClick={signInWithGoogle}>
          SignIn with Google (YOU DONT NEED TO FILL THE EMAIL AND PASSWORD)
        </button>
      </div>
      <pre></pre>
      <div>
        <div>
          <input
            type="text"
            value={details.title}
            onChange={handleTitleDetailsChange}
          />
          <input
            type="text"
            value={details.content}
            onChange={handleContentDetailsChange}
          />
        </div>
        <button
          onClick={() => {
            addToDatabase(details);
          }}
        >
          Add
        </button>
      </div>
      <pre></pre>
      <div>
        <ul>
          {Items?.map((item) => {
            return <ListItem item={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
