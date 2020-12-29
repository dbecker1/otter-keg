import * as React from "react";
import { useFirebaseConnect, populate } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { KegWithDetails } from "../../types/KegWithDetails";

interface PourOverlayProps {
    kegs: KegWithDetails[]
}

export const PourOverlay = React.memo(function PourOverlay(props: PourOverlayProps) {
    const kegs = props.kegs;

    
    return (<div>Pour Overlay</div>);
})