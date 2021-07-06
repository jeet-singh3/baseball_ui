import React from "react";
import "./gamesTable.css";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const GamesTable = (props) => {
    const { games } = props;

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
                        <tr>
                            <td>{value.gameId}</td>
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
