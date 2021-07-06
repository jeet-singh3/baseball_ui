import React from "react";
import { Table } from "react-bootstrap";

export default function IndividualPitcherSummary(props) {
    const summary = props.summary;

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Count</th>
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
                {summary.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{value.pitchType}</td>
                            <td>{value.count}</td>
                            <td>{value.percentage.toFixed(2)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
