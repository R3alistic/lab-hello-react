import logo from './logo.svg';
import './App.css';
import ironhackLogoXS from './images/ironhack-logo-xs.png';
import menuTopXS from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <div className="firstContainer">
        <div className="navbar">
          <img src={ironhackLogoXS} id="logo" alt="ironhack logo" />
          <img src={menuTopXS} id="hamburguer" alt="menu top XS" />
        </div>
        <div className="textOne">
          <h1>Say hello to ReactJS</h1>
          <h5>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h5>
        <button className="awesome">
          Awesome!
        </button>
        <br></br>
        </div>
      </div>
      <div className="secondContainer">
        <div>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <h5>React makes it painless to create interactive UI</h5>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <h5>Build encapsulated components that manage their state.</h5>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <h5>A set of immutable values are passed to the component's.</h5>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <h5>Statically-typed, designed to run on modern browsers.</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
