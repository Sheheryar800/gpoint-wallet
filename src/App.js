import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AcceptGPoint from './Screens/AcceptGPoint';
import BusinessProfile from './Screens/BusinessProfile';
import Crypto from './Screens/Crypto';
import DirectDeposit from './Screens/DirectDeposit';
import GPointDebitCard from './Screens/GPointDebitCard';
import HowItWorks from './Screens/HowItWorks';
import LandingPage from './Screens/LandingPage';
import PayInStore from './Screens/PayInStore';
import Rewards from './Screens/Rewards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/works" element={<HowItWorks />} />
        <Route path="/deposit/" element={<DirectDeposit />} />
        <Route path="/crypto/" element={<Crypto />} />
        <Route path="/accept/" element={<AcceptGPoint />} />
        <Route path="/profile/" element={<BusinessProfile />} />
        <Route path="/pay/" element={<PayInStore />} />
        <Route path="/Debit/" element={<GPointDebitCard />} />
        <Route path="/rewards/" element={<Rewards />} />
      </Routes>
    </Router>
  );
}

export default App;
