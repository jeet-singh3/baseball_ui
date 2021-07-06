import React from "react";
// import logo from './logo.svg';
import Scoreboard from "./containers/scoreboard";
import PitchersInGame from "./containers/pitchersInGame";
import PitcherSummary from "./containers/pitcherSummary";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Exploring Pitch Data</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Games</Nav.Link>
                    <Nav.Link href="/pitcher">Pitcher</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/pitcher">
                    <PitchingYear />
                </Route>
                <Route path="/game">
                    <PitchingInGame />
                </Route>
                <Route path="/">
                    <Games />
                </Route>
            </Switch>
        </Router>
    );
}

function Games() {
    return (
        <div className="App">
            <header className="App-header">
                <Scoreboard />
            </header>
        </div>
    );
}

function About() {
    return <h2>About</h2>;
}

function PitchingInGame() {
    return (
        <div className="App">
            <header className="App-header">
                <PitchersInGame />
            </header>
        </div>
    );
}

function PitchingYear() {
    return (
        <div className="App">
            <header className="App-header">
                <PitcherSummary />
            </header>
        </div>
    );
}
