import * as React from "react";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import "../../../styles/otter-keg/Board.scss";

const LITERS_TO_PINTS = 2.11338;

// maddie don't hate me i don't want to use state for this
var keySequence: number[] = []
const secretSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function getActiveIndex(drinkers: any[]): number {
    for (let i in drinkers) {
        if (drinkers[i].isActive)
            return Number(i);
    }
    return -1;
}

export const Board = React.memo(function Board() {
    const firebase = useFirebase();
    useFirebaseConnect("config");
    useFirebaseConnect("drinkers");
    // this probably isn't a good idea ¯\_(ツ)_/¯
    useFirebaseConnect([{
        path: "pours", 
        queryParams: [ 'orderByChild=isCurrent', "equalTo=false" ],
    }]);

    const shouldShowLeaderBoard = useSelector((state: OtterKegState) => state.firebase.data.config?.showLeaderboard ?? {});
    // const leadershipBoardUpdateTime = useSelector((state: OtterKegState) => state.firebase.data.config?.leaderboardDuration ?? 0);
    let drinkersRaw: any = useSelector((state: OtterKegState) => state.firebase.data.drinkers) ?? {};
    let poursRaw: any = useSelector((state: OtterKegState) => state.firebase.data.pours) ?? {};

    let pours = Object.values(poursRaw);
    let drinkers = Object.keys(drinkersRaw).map((key, index) => {
        let drinker = {
            ...drinkersRaw[key]
        };
        drinker["drinkerId"] = key;
        let drinkerPours = pours.filter((pour: any) => pour.drinkerId === key)
        drinker["pours"] = drinkerPours.length;
        drinker["pourVolume"] = drinkerPours.reduce((acc: number, cur: any) => {
            return acc + cur.amount;
        }, 0) * LITERS_TO_PINTS;
        return drinker
    })
    drinkers.sort((a, b) => {
        return b.pourVolume - a.pourVolume;
    })

    function keycheck(e: any) {
        keySequence.push(e.keyCode);
        if (keySequence.length > 10) {
            keySequence = keySequence.slice(1);
        }
        if (keySequence.length === 10 && keySequence.every((v, i) => v === secretSequence[i])) {
            firebase.ref().update({
                "config/showLeaderboard": !shouldShowLeaderBoard
            })
        }
        if (e.keyCode === 37 || e.keyCode === 39) {
            let index = getActiveIndex(drinkers);
            let newIndex = index + 1;
            if (e.keyCode === 37)
                newIndex = index - 1;
            if (newIndex >= 0 && newIndex < drinkers.length) {
                let updates: any = {}
                updates[`drinkers/${drinkers[index].drinkerId}/isActive`] = false;
                updates[`drinkers/${drinkers[newIndex].drinkerId}/isActive`] = true;
                firebase.ref().update(updates);
            }
        } 
    }

    React.useEffect(() => {
        window.addEventListener("keydown", keycheck);
        return () => {
            window.removeEventListener("keydown", keycheck)
        }
    })
    // TODO leader board
    return !!drinkers && !!pours ? <div className="board">
        {drinkers.map((drinker: any, index: any) => {
            return <div className="drinker" key={index}>
                <p className="name">{shouldShowLeaderBoard ? `${index + 1}. ${drinker.name}` : drinker.name}</p>
                <p className="volume">{shouldShowLeaderBoard ? `Total: ${drinker.pourVolume.toFixed(2)} pints`: ""}</p>
                <p className="status">{drinker.isActive ? "Selected": '\u00A0'}</p>
            </div>
        })}
    </div> : <Spinner />
})