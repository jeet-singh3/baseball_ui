import React from "react";
import { useLocation } from "react-router-dom";
import PitcherSearchView from "./pitcherSearchView";
import PitcherView from "./pitcherView";

export default function PitcherSummary() {
    const search = useLocation().search;
    const pitcherId = new URLSearchParams(search).get("pitcherId");

    if (pitcherId) {
        return <PitcherView pitcherId={pitcherId} />;
    } else {
        return <PitcherSearchView />;
    }
}
