import * as React from "react";
import "../../../styles/otter-keg/Board.scss";
import { Spinner } from "@blueprintjs/core";

interface UserBoardProps {
    drinkers: Record<string, any> | undefined;
}

export const UserBoard = React.memo(function UserBoard(props: UserBoardProps) {
    const {drinkers} = props;

    return <div className="board">
        {drinkers != null ? 
        <React.Fragment>
        <div className="header">Drinkers</div>
        {Object.entries(drinkers).map(([id, drinker]) => {
            return (<div key={id} className={"user"}>{drinker.name}</div>)
        })}</React.Fragment> : <Spinner />}
    </div>
})