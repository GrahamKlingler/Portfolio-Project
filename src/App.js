import './App.css';
// import Navbar from "./Navbar.js";
import Cars from "./Cars.js";
import Street from "./Street.js";
import Bio from "./Bio.js";

function App() {
  let component
  switch (window.location.pathname) {
    case "/Portfolio-Project/bio":
      component = <Bio />
      break
    case "/Portfolio-Project/cars":
      component = <Cars />
      break
    case "/Portfolio-Project/street":
      component = <Street />
      break
    default:
      component = <Bio />
      break
  }
  return (
    <div className='App'>
      { component }
    </div>
  );
}

export default App;
