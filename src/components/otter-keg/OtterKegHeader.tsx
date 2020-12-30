import * as React from "react";
import "../../styles/otter-keg/OtterKegHeader.scss";
import pbu from "../../assets/pbu_40_white.png";

export const OtterKegHeader = React.memo(function OtterKegHeader() {

    return (
        <div className="otter-keg-header">
            <span>Otter Keg</span>
            <img src={pbu} alt={"Powered by Untappd"} />
        </div>
        );
})