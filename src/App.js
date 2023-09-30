import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from "./Cars.js";
import Street from "./Street.js";
import Bio from "./Bio.js";

function App() {
  let reponame = "Portfolio-Project";
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path={`/${reponame}/bio`} element={<Bio />}/>
          <Route path={`/${reponame}/`} element={<Bio />}/>
          <Route path={`/${reponame}/cars`} element={<Cars />}/>
          <Route path={`/${reponame}/street`} element={<Street />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
