import "./App.css";
import share from "./assets/img/share.png";
import avatar from "./assets/img/profile__img.png";
import slack from "./assets/img/slack.png";
import github from "./assets/img/github.png";
import Zuri from "./assets/img/Zuri.Internship_Logo.png";
import I4G from "./assets/img/I4G.png";
import more from "./assets/img/three-dots.png";

function App() {
  return (
    <div className="App">
      <div className="profile-section">
        <a href="#">
          <img src={share} className="share" alt="" />
        </a>
        <a href="#">
          <img src={more} alt="" className="more" />
        </a>
        <img src={avatar} id="profile__image" alt="" />
        <h2 id="twitter">Udeme Udoh</h2>
        <h2 id="slack">Udemxx</h2>
      </div>

      <div className="links">
        <a className="links__btn" href="https://twitter.com/u_d_e_m_x">
          Twitter Link
        </a>
        <a
          className="links__btn"
          href="https://training.zuri.team/"
          id="btn__zuri"
        >
          Zuri Teams
        </a>
        <a href="http://books.zuri.team" className="links__btn" id="books">
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=udeme_udoh"
          className="links__btn"
          id="book__python"
        >
          Python Books
        </a>
        <a
          href="https://background.zuri.team"
          className="links__btn"
          id="pitch"
          title="Hire Me For Background Code Checks"
        >
          Background Checks for Coders
        </a>
        <a
          href="https://books.zuri.team/design-rules"
          className="links__btn"
          id="book__design"
        >
          Design Books
        </a>
      </div>
      <div className="social-section">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
      <div className="footer-section">
        <div>
          <img src={Zuri} alt="" />
        </div>
        <div>
          <p className="footer-text">HNG Internship 9 Frontend Task</p>
        </div>
        <div>
          <img src={I4G} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
