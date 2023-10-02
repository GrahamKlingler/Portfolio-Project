import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from "./Cars.js";
import Street from "./Street.js";
import Home from "./Home.js";
import Bridges from './Bridges.js';
import Buildings from './Buildings.js';
import Skylines from './Skylines.js';
import Bio from './Bio.js';

function App() {
  let reponame = "Portfolio-Project";
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path={`/${reponame}/`} element={<Home />}/>
          <Route path={`/${reponame}/cars`} element={<Cars />}/>
          <Route path={`/${reponame}/street`} element={<Street />}/>
          <Route path={`/${reponame}/bridges`} element={<Bridges />}/>
          <Route path={`/${reponame}/buildings`} element={<Buildings />}/>
          <Route path={`/${reponame}/skylines`} element={<Skylines />}/>
          <Route path={`/${reponame}/bio`} element={<Bio />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
