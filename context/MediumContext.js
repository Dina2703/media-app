import { createContext, useState, useEffect } from "react";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db, auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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

  //user authentication/sign-in by Google
  const handleUserAuth = async () => {
    const userData = await signInWithPopup(auth, provider);
    //in order to get a 'user' prop of the returned object,
    const user = userData.user;
    setCurrentUser(user);
    //after a user sign-in, add the user into Firebase database
    addUserToFirebase(user);
    console.log("user added");
  };

  //set authUser into Firebase database
  const addUserToFirebase = async (user) => {
    //to set a new user, we need to pass db. collection name, and id for the new user, which is gonna be user's email
    await setDoc(doc(db, "users", user?.email), {
      email: user.email,
      name: user.displayName,
      imageUrl: user.photoURL,
      followerCount: 0,
    });
  };

  return (
    <MediumContext.Provider
      value={{ users, posts, handleUserAuth, currentUser }}
    >
      {children}
    </MediumContext.Provider>
  );
};

export { MediumContext, MediumProvider };
