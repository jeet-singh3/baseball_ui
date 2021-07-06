import React from "react";
import { useLocation } from "react-router-dom";
import PitcherGameSummary from "../../components/pitcherGameSummary/pitcherGameSummary";

export default function PitchersInGame() {
    const search = useLocation().search;
    const gameId = new URLSearchParams(search).get("gameId");

    return (
        <div>
            <h1>Items page</h1>
            <PitcherGameSummary gameId={gameId} />
        </div>
    );
}
