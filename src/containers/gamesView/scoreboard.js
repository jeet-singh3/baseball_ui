import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import GamesTable from "../../components/gamesTable/gamesTable";
import { getScores } from "../../actions/getScores";
import {
    getScoresLoading,
    getGamesCount,
    getScoreError,
    getGamesDate,
    getGames,
} from "../../reducers/reducers";

class Scoreboard extends Component {
    state = {
        val: "2021-05-11",
    };

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
        queryScores(this.state.val);
    }

    render() {
        const { games, gamesDate } = this.props;

        return (
            <div>
                <hr></hr>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="Search Games"
                            className="mr-sm-2"
                            value={this.state.val}
                            onChange={(e) =>
                                this.setState({ val: e.target.value })
                            }
                        />
                        <Button
                            variant="outline-success"
                            onClick={this.queryFunction}
                        >
                            Search
                        </Button>
                    </Form>
                </div>
                <hr></hr>
                <div>
                    <GamesTable games={games} gamesDate={gamesDate} />
                </div>
                <hr></hr>
            </div>
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
    queryScores: (gameDate) => {
        dispatch(getScores(gameDate));
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
