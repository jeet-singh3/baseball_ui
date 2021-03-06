import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import IndividualPitcherSummary from "./individualPitcherSummary";
import { getPitchersInGame } from "../actions/getPitchersInGame";
import {
    getPitchersByGameIsError,
    getPitchersByGameLister,
    getPitchersByGameLoading,
} from "../reducers/reducers";

class PitcherGameSummary extends Component {
    constructor(props) {
        super(props);
        this.queryFunction = this.queryFunction.bind(this);
    }
    componentDidMount() {
        const { gameId, queryGamePitchers } = this.props;
        console.log("Component is active");
        console.log(gameId);
        queryGamePitchers(gameId);
    }
    queryFunction() {
        const { gameId, queryGamePitchers } = this.props;
        console.log("Send to dispatcher");
        queryGamePitchers(gameId);
    }

    render() {
        const { pitchers } = this.props;
        return (
            <div>
                <Table responsive="sm" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Pitcher Name</th>
                            <th>Avg FB Velo</th>
                            <th>Pitch Count</th>
                            <th>Pitch Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pitchers.map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <Link
                                            to={{
                                                pathname: "/pitcher",
                                                search: `?pitcherId=${value.pitcherId}`,
                                            }}
                                        >
                                            {value.summary.name}
                                        </Link>
                                    </td>
                                    <td>
                                        {value.summary.individual_game_summary.averageFastballVelocity.toFixed(
                                            2
                                        )}
                                    </td>
                                    <td>
                                        {
                                            value.summary
                                                .individual_game_summary
                                                .pitchCount
                                        }
                                    </td>
                                    <td>
                                        <IndividualPitcherSummary
                                            summary={
                                                value.summary
                                                    .individual_game_summary
                                                    .summary
                                            }
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    error: getPitchersByGameIsError(state),
    loading: getPitchersByGameLoading(state),
    pitchers: getPitchersByGameLister(state),
});

const mapDispatchToProps = (dispatch) => ({
    queryGamePitchers: (gameId) => {
        dispatch(getPitchersInGame(gameId));
    },
});

PitcherGameSummary.propTypes = {
    error: PropTypes.bool,
    loading: PropTypes.bool,
    pitchers: PropTypes.array,
    queryGamePitchers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PitcherGameSummary);
