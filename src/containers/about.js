import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div style={{ justifyContent: "center" }}>
                <h1>About</h1>
                <hr></hr>
                <p>
                    This is the front end to the Exploring Pitch Data -
                    baseball_api backend.
                </p>
                <h1>Games Page</h1>
                <div style={{ justifyContent: "center", textAlign: "left" }}>
                    <ul>
                        <li>
                            The start page is the <b>Games</b> page.
                        </li>
                        <li>
                            Search for baseball games on a given date in the
                            2021 baseball season.
                        </li>
                        <li>
                            Note: the search date format is&nbsp;
                            <b>YYYY-MM-DD.</b>
                        </li>
                        <li>
                            Clicking on the Game ID link in the <b>Games</b>{" "}
                            page takes you to the <b>Game View</b>
                        </li>
                    </ul>
                </div>
                <h1>Game View</h1>
                <div style={{ justifyContent: "center", textAlign: "left" }}>
                    <ul>
                        <li>
                            The games view page shows the pitchers that pitched
                            in this game.
                        </li>
                        <li>
                            Stats include average fastball velocity, pitch
                            count, and a pitch type breakdown.
                        </li>
                        <li>
                            Clicking on the Pitcher's name link in the{" "}
                            <b>Game View</b> page takes you to the{" "}
                            <b>Pitchers View</b>
                        </li>
                    </ul>
                </div>
                <h1>Pitcher View</h1>
                <div style={{ justifyContent: "center", textAlign: "left" }}>
                    <ul>
                        <li>
                            The Pitcher View page shows this pitchers season
                            stats broken down by pitch type as well as a game
                            breakdown.
                        </li>
                        <li>
                            Season Stats include pitch type, pitch count,
                            percentage, average hit speed, average launch angle,
                            average pitch speed, average spin rate, average
                            vertical movement, and average horizontal movement.
                        </li>
                        <li>
                            Individual game stats show the game matchup, the
                            game date, total pitch count, avergae fastball
                            velocity, and a pitch type breakdown.
                        </li>
                        <li>
                            Clicking on the Game ID link in the{" "}
                            <b>Individual Game Stats</b> section takes you to
                            the <b>Game View</b> for that game.
                        </li>
                    </ul>
                </div>
                <h1>Pitcher Tab</h1>
                <div style={{ justifyContent: "center", textAlign: "left" }}>
                    <ul>
                        <li>
                            Clicking on the Pitcher Tab in the navigation screen
                            takes you to the pitcher search page.
                        </li>
                        <li>
                            Here you can search for a particular pitcher using
                            their first name or last name or both.
                        </li>
                        <li>
                            Once the search is completed, clicking on a
                            pitcher's name will take you to the Pitcher View for
                            that pitcher.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
