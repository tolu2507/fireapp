import { app, database } from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";

let component;

const auth = getAuth();
const Google = new GoogleAuthProvider();
export const detailRef = collection(database, "Details");
export let datas;
export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      alert("Sign in");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export function signInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
      alert("Logged in");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export function signInWithGoogle() {
  signInWithPopup(auth, Google)
    .then((userCredential) => {
      console.log(userCredential.user);
      alert("Logged in");
    })
    .catch((error) => {
      alert(error.message);
    });
}

export function addToDatabase(details) {
  if (
    details.title === null ||
    details.title === undefined ||
    details.content === null ||
    details.content === undefined
  ) {
    throw console.error("The details field cant be empty");
  }
  addDoc(detailRef, { title: details.title, content: details.content })
    .then(() => {
      alert("Document Added. thank you.");
    })
    .catch((err) => {
      alert(err.message);
    });
}

export function logoutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
        alert("Signed out successfully")
    })
    .catch((error) => {
      // An error happened.
        alert(error.message)
    });
}

export function getData() {
  onSnapshot(detailRef, (data) => {
    datas = data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
  });
}

export function handleEdit(id, details) {
  const docUpdate = doc(database, "Details", id);
  updateDoc(docUpdate, { title: details.title, content: details.content })
    .then((res) => {
      alert("Data updated");
    })
    .catch((err) => {
      alert(err.message);
    });
}

export function handleDelete(id) {
  const docDelete = doc(database, "Details", id);
  deleteDoc(docDelete)
    .then((res) => {
      alert("Data deleted");
    })
    .catch((err) => {
      alert(err.message);
    });
}

export function ListItem({ item }) {
  const detail = { title: "", content: "" };
  const [editing, setEditing] = useState(false);
  const [editDetails, setEditDetails] = useState(detail);
  if (editing === false) {
    component = (
      <>
        <div>
          <h3>{item.title}</h3>
        </div>
        <div>{item.content}</div>
        <button
          onClick={() => {
            setEditing(!editing);
          }}
        >
          edit
        </button>
      </>
    );
  } else {
    component = (
      <>
        <input
          type="text"
          value={editDetails.title}
          onChange={(e) => {
            setEditDetails({ ...editDetails, title: e.target.value });
          }}
        />
        <input
          type="text"
          value={editDetails.content}
          onChange={(e) => {
            setEditDetails({ ...editDetails, content: e.target.value });
          }}
        />
        <button
          onClick={() => {
            setEditing(!editing);
            handleEdit(item.id, editDetails);
          }}
        >
          Save
        </button>
      </>
    );
  }

  return (
    <li key={item.id}>
      {component}
      <button
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        delete
      </button>
    </li>
  );
}

// import { collection, getDocs } from "firebase/firestore";

// const querySnapshot = await getDocs(collection(db, "cities"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });
