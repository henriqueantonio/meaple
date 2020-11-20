import React from "react";
import fireDb from "./firebase";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => fireDb.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
