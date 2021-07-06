import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlayerSearchList = (props) => {
    const { players } = props;

    console.log(players);

    return (
        <ul>
            {players.map((player, index) => {
                return (
                    <li key={index}>
                        <Link
                            to={{
                                pathname: "/pitcher",
                                search: `?pitcherId=${player.playerId}`,
                            }}
                        >
                            {player.nameUse} {player.nameLast}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

PlayerSearchList.propTypes = {
    players: PropTypes.array,
};

export default PlayerSearchList;
