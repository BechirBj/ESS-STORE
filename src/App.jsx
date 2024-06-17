import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Kits from './Pages/Kits';
import Home from './Pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kits" element={<Kits />} />
      </Routes>
    </Router>
  );
}

export default App;
