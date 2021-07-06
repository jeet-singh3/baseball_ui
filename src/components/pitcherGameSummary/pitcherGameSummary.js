import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getPitchersInGame } from "../../actions/getPitchersInGame";
import {
    getPitchersByGameIsError,
    getPitchersByGameLister,
    getPitchersByGameLoading,
} from "../../reducers/reducers";

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
            <ul>
                {pitchers.map((value, index) => {
                    return <li key={index}> {value.name} </li>;
                })}
            </ul>
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
