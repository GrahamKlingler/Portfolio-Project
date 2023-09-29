import './App.css';
import Navbar from "./Navbar.js";
import Cars from "./Cars.js";
import Street from "./Street.js";
import Bio from "./Bio.js";

function App() {
  let component
  switch (window.location.pathname) {
    case "/bio":
      component = <Bio />
      break
    case "/cars":
      component = <Cars />
      break
    case "/street":
      component = <Street />
      break
    default:
      component = <Bio />
      break
  }
  return (
    <div className='App'>
      <Navbar />
      { component }
    </div>
  );
}

export default App;
