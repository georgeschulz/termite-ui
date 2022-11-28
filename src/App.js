import './App.css';
import Termites from './pages/termites';
import Ants from './pages/ants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App h-screen">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/termites" element={<Termites />} />
            <Route path="/ants" element={<Ants />} />
            <Route path='*' element={<h1>404: Not Found</h1>} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
