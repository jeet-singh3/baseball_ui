import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getPlayers } from "../actions/getPlayers";
import PlayerSearchList from "../components/playerSearchList";
import {
    getPlayerSearchLoading,
    getPlayerSearchCount,
    getPlayerSearchIsError,
    getPlayersSearchList,
} from "../reducers/reducers";

class PitcherSearchView extends Component {
    state = {
        firstName: "",
        lastName: "",
    };

    constructor(props) {
        super(props);
        this.queryFunction = this.queryFunction.bind(this);
    }

    queryFunction() {
        const { queryPlayers } = this.props;
        console.log("Send to dispatcher");
        queryPlayers(this.state.firstName, this.state.lastName);
    }

    render() {
        const { players } = this.props;

        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form inline>
                        <FormControl
                            type="text"
                            placeholder="First Name"
                            className="mr-sm-2"
                            value={this.state.firstName}
                            onChange={(e) =>
                                this.setState({ firstName: e.target.value })
                            }
                        />
                        <FormControl
                            type="text"
                            placeholder="Last Name"
                            className="mr-sm-2"
                            value={this.state.lastName}
                            onChange={(e) =>
                                this.setState({ lastName: e.target.value })
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
                <PlayerSearchList players={players} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: getPlayerSearchCount(state),
    error: getPlayerSearchIsError(state),
    loading: getPlayerSearchLoading(state),
    players: getPlayersSearchList(state),
});

const mapDispatchToProps = (dispatch) => ({
    queryPlayers: (firstName, lastName) => {
        dispatch(getPlayers(firstName, lastName));
    },
});

PitcherSearchView.propTypes = {
    count: PropTypes.number,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    gamesDate: PropTypes.string,
    games: PropTypes.array,
    queryPlayers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PitcherSearchView);
