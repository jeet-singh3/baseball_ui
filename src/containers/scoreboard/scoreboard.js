import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { getScores } from '../../actions/getScores'
import {
    getScoresLoading, getMyScore, getScoreError, getMyUserList
} from '../../reducers/reducers'

class Scoreboard extends Component {

    constructor(props) {
        super(props);    
        this.queryFunction = this.queryFunction.bind(this);
    }
    componentDidMount() {
        // run button function
        console.log("Component is active");
    }
    queryFunction() {
        const { queryScores } = this.props;
        // send to dispatcher
        console.log("Send to dispatcher");
        queryScores();
    }

    render() {
        const {
            score
        } = this.props;

        return (
            <Button variant="success" onClick={this.queryFunction}>`{score}`</Button>
        );
    }
}

const mapStateToProps = state => ({
    score: getMyScore(state),
    error: getScoreError(state),
    loading: getScoresLoading(state),
    userList: getMyUserList(state)
});

const mapDispatchToProps = dispatch => ({
    queryScores: () => {
        dispatch(getScores());
    },
});

Scoreboard.propTypes = {
    score: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.string,
    userList: PropTypes.array,
    queryScores: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard)