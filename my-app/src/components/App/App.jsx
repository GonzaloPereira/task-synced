import React, { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Schedule from '../Schedule/Schedule';
import Teams from '../Teams/Teams';

function App() {
  const [showSchedule, setShowSchedule] = useState(true);
  const [showTeams, setShowTeams] = useState(false);

  return (
    <main>
      <Header
        scheduleOn={() => {
          setShowSchedule(true);
          setShowTeams(false);
        }}
        teamsOn={() => {
          setShowSchedule(false);
          setShowTeams(true);
        }}
      />
      {showSchedule && <Schedule />}
      {showTeams && <Teams />}
      <Footer />
    </main>
  );
}

export default App;
