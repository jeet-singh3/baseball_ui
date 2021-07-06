import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import PitcherYearToDate from "../components/pitcherYearToDate";
import PitcherGamesYearToDate from "../components/pitcherGamesYearToDate";
import { getPitchesForPitcher } from "../actions/getPitchSummaryForPitcher";
import { getGamesForPitcher } from "../actions/getPitcherSummaryForGames";
import {
    getPitchesByPitcherLoading,
    isPitchessByPitcherError,
    fetchPitchersName,
    fetchPitchesByPitcherList,
    isGamesByPitcherLoading,
    isGamesByPitcherError,
    gamesPitchedByPitcherList,
} from "../reducers/reducers";

class PitcherView extends Component {
    componentDidMount() {
        const { queryPitches, queryGames, pitcherId } = this.props;
        console.log("Scoreboard component is active");
        queryPitches(pitcherId);
        queryGames(pitcherId);
        window.scrollTo(0, 0);
    }

    render() {
        const { pitcherId, name, pitches, games } = this.props;

        return (
            <div>
                <h1>
                    {name}: {pitcherId}
                </h1>
                Year To Date Stats
                <PitcherYearToDate pitches={pitches} />
                <hr></hr>
                <h1>Individual Game Stats</h1>
                <PitcherGamesYearToDate games={games} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    name: fetchPitchersName(state),
    error: isPitchessByPitcherError(state) || isGamesByPitcherError(state),
    // error: isPitchessByPitcherError(state),
    loading:
        getPitchesByPitcherLoading(state) || isGamesByPitcherLoading(state),
    // loading: getPitchesByPitcherLoading(state),
    pitches: fetchPitchesByPitcherList(state),
    games: gamesPitchedByPitcherList(state),
});

const mapDispatchToProps = (dispatch) => ({
    queryPitches: (pitcherId) => {
        dispatch(getPitchesForPitcher(pitcherId));
    },
    queryGames: (pitcherId) => {
        dispatch(getGamesForPitcher(pitcherId));
    },
});

PitcherView.propTypes = {
    name: PropTypes.string,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    pitches: PropTypes.array,
    games: PropTypes.array,
    queryPitches: PropTypes.func.isRequired,
    queryGames: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PitcherView);
