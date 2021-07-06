import React from "react";
// import logo from './logo.svg';
import Scoreboard from "./containers/gameView/scoreboard";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Exploring Pitch Data</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Games</Nav.Link>
                    <Nav.Link href="/">Game</Nav.Link>
                    <Nav.Link href="/pitcher">Pitcher</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search Pitcher"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/pitcher">
                    <Users />
                </Route>
                <Route path="/">
                    <Game />
                </Route>
            </Switch>
        </Router>
    );
}

function Game() {
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

function Users() {
    return <h2>Users</h2>;
}
