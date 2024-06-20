import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Kits from './Pages/Kits';
import Home from './Pages/home';
import ShopPlayers from './Pages/Shop-Players';
import P1 from './Components/ShopPlayers/PlayersPages/P1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kits" element={<Kits />} />
        <Route path="/Shop-Players" element={<ShopPlayers />} />
        <Route path="/player/1" element={<P1/>} />
      </Routes>
    </Router>
  );
}

export default App;
