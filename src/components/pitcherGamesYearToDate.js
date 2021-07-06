import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import IndividualPitcherSummary from "./individualPitcherSummary";
import { Link } from "react-router-dom";

const PitcherGamesYearToDate = (props) => {
    const { games } = props;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Game ID</th>
                    <th>Matchup</th>
                    <th>Date</th>
                    <th>Count</th>
                    <th>avg FB</th>
                    <th>Pitch Usage</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <Link
                                    to={{
                                        pathname: "/game",
                                        search: `?gameId=${game.gameId}&awayTeam=${game.awayTeam}&homeTeam=${game.homeTeam}&gameDate=${game.gameDate}`,
                                    }}
                                >
                                    {game.gameId}
                                </Link>
                            </td>
                            <td>
                                {game.awayTeam} @ {game.homeTeam}
                            </td>
                            <td>{game.gameDate}</td>
                            <td>{game.pitchCount}</td>
                            <td>{game.averageFastballVelocity.toFixed(2)}</td>
                            <td>
                                <IndividualPitcherSummary
                                    summary={game.summary}
                                />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

PitcherGamesYearToDate.propTypes = {
    games: PropTypes.array,
};

export default PitcherGamesYearToDate;
