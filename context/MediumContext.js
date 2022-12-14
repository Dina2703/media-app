import { createContext, useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  //since we need to load  users and post data after first page loading, use useEffect

  useEffect(() => {
    //fetch the users's data
    const getUsers = async () => {
      const querySnapShot = await getDocs(collection(db, "users"));
      // querySnapShot.docs.map((doc) => console.log(doc.data()));
      setUsers(
        querySnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getUsers();
  }, []);

  useEffect(() => {
    //fetch the posts's data
    const getPosts = async () => {
      const querySnapShot = await getDocs(collection(db, "articles"));
      setPosts(
        querySnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            data: {
              ...doc.data(),
            },
          };
        })
      );
    };
    getPosts();
  }, []);

  return (
    <MediumContext.Provider value={{ users, posts }}>
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
