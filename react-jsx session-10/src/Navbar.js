import { useContext } from "react";
import UserContext from "./UserContext";

export default function Navbar() {
  const user = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Context API</span>
        <span className="text-white">
          {user.username}
        </span>
      </div>
    </nav>
  );
}