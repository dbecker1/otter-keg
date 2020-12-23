import * as React from "react";
import { useFirebaseConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../../state/OtterKegState";
import { UserBoard } from "./UserBoard";

export const Board = React.memo(function Board() {

    useFirebaseConnect("config");
    useFirebaseConnect("drinkers");

    const shouldShowLeaderBoard = useSelector((state: OtterKegState) => state.firebase.data.config?.showLeadership ?? {});
    // const leadershipBoardUpdateTime = useSelector((state: OtterKegState) => state.firebase.data.config?.leaderboardDuration ?? 0);
    const drinkers = useSelector((state: OtterKegState) => state.firebase.data.drinkers);

    // TODO leader board
    return (
        shouldShowLeaderBoard ? <UserBoard drinkers={drinkers} /> : <UserBoard drinkers={drinkers} />
    )
})