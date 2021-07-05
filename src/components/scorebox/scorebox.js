import React from 'react';
import Scoreboard from '../../containers/scoreboard/scoreboard'
import './scorebox.css'

function Scorebox() {
  return (
    <div className="Scorebox">
      <header className="Scorebox-header">
        <p>
          Basic scorebox template
        </p>
        <Scoreboard />
      </header>
    </div>
  );
}

export default Scorebox;
