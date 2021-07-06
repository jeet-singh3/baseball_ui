import React from "react";
import { useLocation } from "react-router-dom";

export default function PitcherSummary() {
    const search = useLocation().search;
    const pitcherId = new URLSearchParams(search).get("pitcherId");

    if (pitcherId) {
        return <div>Hello World</div>;
    } else {
        return <div>Oh No!</div>;
    }
}
