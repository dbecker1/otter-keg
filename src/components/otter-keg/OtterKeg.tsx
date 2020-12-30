import React from 'react'
import { OtterKegHeader } from "./OtterKegHeader";
import { OtterKegMain } from "./OtterKegMain";
import { Board } from "./board/Board";
import "../../styles/otter-keg/OtterKeg.scss";

export const OtterKeg = React.memo(function OtterKeg() {

    return (
            <React.Fragment>
            <OtterKegHeader />
            <div className="otter-keg-body">
                <OtterKegMain />
            </div>
            <Board />
        </React.Fragment>
        
    )
})