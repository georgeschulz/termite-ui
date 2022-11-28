import './App.css';
import Termites from './pages/termites';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App h-screen ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termites" element={<Termites />} />
          <Route path='*' element={<h1>404: Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
