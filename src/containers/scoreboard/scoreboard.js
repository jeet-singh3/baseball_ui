import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import { getScores } from "../../actions/getScores";
import {
    getScoresLoading,
    getGamesCount,
    getScoreError,
    getGamesDate,
    getGames,
} from "../../reducers/reducers";

class Scoreboard extends Component {
    constructor(props) {
        super(props);
        this.queryFunction = this.queryFunction.bind(this);
    }
    componentDidMount() {
        const { queryScores } = this.props;
        console.log("Component is active");
        queryScores();
    }
    queryFunction() {
        const { queryScores } = this.props;
        console.log("Send to dispatcher");
        queryScores();
    }

    render() {
        const { gamesDate } = this.props;

        return (
            <Button variant="success" onClick={this.queryFunction}>
                {gamesDate}
            </Button>
        );
    }
}

const mapStateToProps = (state) => ({
    count: getGamesCount(state),
    error: getScoreError(state),
    loading: getScoresLoading(state),
    gamesDate: getGamesDate(state),
    games: getGames(state),
});

const mapDispatchToProps = (dispatch) => ({
    queryScores: () => {
        dispatch(getScores());
    },
});

Scoreboard.propTypes = {
    count: PropTypes.number,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    gamesDate: PropTypes.string,
    games: PropTypes.array,
    queryScores: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
