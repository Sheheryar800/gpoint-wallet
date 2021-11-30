import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AcceptGPoint from './Screens/AcceptGPoint';
import BusinessProfile from './Screens/BusinessProfile';
import Crypto from './Screens/Crypto';
import DirectDeposit from './Screens/DirectDeposit';
import GPointDebitCard from './Screens/GPointDebitCard';
import HowItWorks from './Screens/HowItWorks';
import PayInStore from './Screens/PayInStore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowItWorks />} />
        <Route path="/deposit/" element={<DirectDeposit />} />
        <Route path="/crypto/" element={<Crypto />} />
        <Route path="/accept/" element={<AcceptGPoint />} />
        <Route path="/profile/" element={<BusinessProfile />} />
        <Route path="/pay/" element={<PayInStore />} />
        <Route path="/Debit/" element={<GPointDebitCard />} />
      </Routes>
    </Router>
  );
}

export default App;
