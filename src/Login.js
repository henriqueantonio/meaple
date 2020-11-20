import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import fireDb from "./firebase.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fireDb
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="wrapper fadeInDown">
  <div id="formContent">

  <br/>

    <div className="fadeIn first">
      <a href="/">
        <img src="https://firebasestorage.googleapis.com/v0/b/meaple-f95d3.appspot.com/o/img%2Fmeaple.png?alt=media&token=b5aedabf-84fc-4bbd-a3ed-185a3b4084fb" />
    </a>
      </div>

      <br/>


    <form onSubmit={handleLogin}>
      <input type="email" className="fadeIn second" name="email" type="email" placeholder="E-mail"/>
      <input type="password" className="fadeIn third" name="password" placeholder="Senha"/>
      <br/>
      <input type="submit" className="fadeIn fourth" value="Entrar"/>
    </form>


  </div>
</div>
  );
};

export default withRouter(Login);
