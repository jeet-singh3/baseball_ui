import React from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

const PitcherYearToDate = (props) => {
    const { pitches } = props;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Pitch Type</th>
                    <th>Pitch Count</th>
                    <th>Pitch %</th>
                    <th>avg Hit Speed</th>
                    <th>avg Launch Angle</th>
                    <th>avg Pitch Speed</th>
                    <th>avg Spin Rate</th>
                    <th>avg Vertical</th>
                    <th>avg Horizontal</th>
                </tr>
            </thead>
            <tbody>
                {pitches.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.pitchType}</td>
                            <td>{value.count}</td>
                            <td>{value.percentage.toFixed(2)}</td>
                            <td>{value.avgHitSpeed.toFixed(2)}</td>
                            <td>{value.avgLaunchAngle.toFixed(2)}</td>
                            <td>{value.avgPitchSpeed.toFixed(2)}</td>
                            <td>{value.avgSpinRate.toFixed(2)}</td>
                            <td>{value.avgVerticalMovement.toFixed(2)}</td>
                            <td>{value.avgHorizontalMovement.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
};

PitcherYearToDate.propTypes = {
    pitches: PropTypes.array,
};

export default PitcherYearToDate;
