// import logo from './logo.svg';
import "./App.css";
import share from "./assets/img/share.png";
import avatar from "./assets/img/profile__img.png";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Testing React
        </a>
      </header> */}
      <div className="profile-section">
        <img src={avatar} id="profile__image" alt="" />
        <img src={share} className="share" alt="" />
        <h2 id="twitter">Udeme Udoh</h2>
        <h2 id="slack">Udemxx</h2>
      </div>

      <div className="links">
        <a
          className="links__btn"
          href="https://training.zuri.team/"
          id="btn__zuri"
        >
          Zuri Teams
        </a>
        <a href="http://books.zuri.team" className="links__btn" id="books">
          Purchase Designs & Coding Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=udeme_udoh"
          className="links__btn"
          id="book__python"
        >
          Purchase Python For Beginners
        </a>
        <a
          href="https://background.zuri.team"
          className="links__btn"
          id="pitch"
        >
          Hire Me For Background Code Checks
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          className="links__btn"
          id="book__design"
        >
          Get Free Design Rules (Guide Book) By Zuri Teams
        </a>
      </div>
    </div>
  );
}

export default App;
