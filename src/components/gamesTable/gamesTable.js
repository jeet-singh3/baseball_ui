import React from "react";
import "./gamesTable.css";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const GamesTable = (props) => {
    const { games, gamesDate } = props;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Game ID</th>
                    <th>Away Team</th>
                    <th>Home Team</th>
                </tr>
            </thead>
            <tbody>
                {games.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <Link
                                    to={{
                                        pathname: "/game",
                                        search: `?gameId=${value.gameId}&awayTeam=${value.awayTeam}&homeTeam=${value.homeTeam}&gameDate=${gamesDate}`,
                                    }}
                                >
                                    {value.gameId}
                                </Link>
                            </td>
                            <td>{value.awayTeam}</td>
                            <td>{value.homeTeam}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

GamesTable.propTypes = {
    games: PropTypes.array,
};

export default GamesTable;
