import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
function App() {
  return (
    <div className="box">
      <div className=" card">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
      <div className=" card">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
      <div className=" card">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
