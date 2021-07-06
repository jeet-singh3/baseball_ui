import React from "react";
import { useLocation } from "react-router-dom";
import PitcherGameSummary from "../../components/pitcherGameSummary/pitcherGameSummary";

export default function PitchersInGame() {
    const search = useLocation().search;
    const gameId = new URLSearchParams(search).get("gameId");
    const awayTeam = new URLSearchParams(search).get("awayTeam");
    const homeTeam = new URLSearchParams(search).get("homeTeam");
    const gameDate = new URLSearchParams(search).get("gameDate");

    return (
        <div>
            <hr></hr>
            <h1>
                {awayTeam} vs {homeTeam}
            </h1>
            <h2>{gameDate}</h2>
            <hr></hr>
            <PitcherGameSummary gameId={gameId} />
        </div>
    );
}
