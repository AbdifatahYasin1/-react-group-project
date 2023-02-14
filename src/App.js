import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/Myprofile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
