import { Routes, Route } from 'react-router';
import BrunoPixi from './components/BrunoPixi';
import DanPixi from './components/DanPixi';
import GilsonPixi from './components/GilsonPixi';
import JoePixi from './components/JoePixi';
import RickyPixi from './components/RickyPixi';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/bruno' element={<BrunoPixi />} />
      <Route path='/dan' element={<DanPixi />} />
      <Route path='/gilson' element={<GilsonPixi />} />
      <Route path='/joe' element={<JoePixi />} />
      <Route path='/ricky' element={<RickyPixi />} />
    </Routes>
  );
}

export default App;
