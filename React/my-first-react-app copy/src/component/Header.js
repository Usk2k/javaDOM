import "./../styles/header.css";
import Body from "./Body";
export default function Header() {
  return (
    <div className="container">
      <div className="line"></div>
      <header className="head-up">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/1280px-Stack_Overflow_logo.svg.png" />
        </div>
        <ul>
          <li>about</li>
          <li>products</li>
          <li> for team</li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search.." className="search" />
          <button type="search" className="search-btn">
            Search
          </button>
        </div>
        <div className="buttons">
          <button className="login"> Login</button>
          <button className="sign">Sign Up</button>
        </div>
      </header>
      <body></body>
    </div>
  );
}
