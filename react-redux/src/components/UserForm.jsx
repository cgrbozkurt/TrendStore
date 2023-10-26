import { useState } from "react";
import { authActions } from "../store/auth"; 
import { useDispatch } from "react-redux";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const loginHandler=(e)=>{
    dispatch(authActions.login()  )
    e.preventDefault()
  }

  return (

    <form onSubmit={loginHandler}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default UserForm;
