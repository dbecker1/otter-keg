import * as React from "react";
import { useSelector } from "react-redux";
import { OtterKegState } from "../../state/OtterKegState";
import { Spinner } from "@blueprintjs/core";
import "../../styles/otter-keg/OtterKegMain.scss";
import { KegWithDetails } from "../../types/KegWithDetails";
import { KegStats } from "./KegStats";
import { Charts } from "./Charts";

const NUM_PAGES = 2;
export const OtterKegMain = React.memo(function OtterKegMain() {
    let [activePage, setActivePage] = React.useState(0);
    let activeKegs: KegWithDetails[] = useSelector((state: OtterKegState) => state.activeKegs) || {};

    const keycheck = React.useCallback((e) => {
        if (e.keyCode === 37) {
            let newActivePage = activePage - 1;
            if (newActivePage < 0) 
                newActivePage = NUM_PAGES - 1;
            console.log(newActivePage);
            setActivePage(newActivePage);
        } else if (e.keyCode === 39) {
            let newActivePage = activePage + 1;
            if (newActivePage >= NUM_PAGES) 
                newActivePage = 0;
            console.log(newActivePage);
            setActivePage(newActivePage);
        } 
    }, [activePage, setActivePage])

    React.useEffect(() => {
        window.addEventListener("keydown", keycheck);
        return () => {
            window.removeEventListener("keydown", keycheck)
        }
    })
    return activeKegs.length > 0 ? <div className={"otter-keg-main"}>
            {activePage === 0 && 
                <div className={"keg-details"}>
                    <div className="keg-details-row header">
                        {activeKegs.map((keg, index) => {
                            return <div className="keg-details-col" key={index}>
                                <p className="beer-title">{keg.beerDetails.beer_name}</p>
                                <p>{keg.beerDetails.beer_style}<br />{keg.beerDetails.brewery.brewery_name}<br />{keg.beerDetails.beer_abv}% ABV, {keg.beerDetails.beer_ibu} IBU <br /> </p> 

                            </div>
                        })}
                    </div>
                    <div className="keg-details-row image">
                        {activeKegs.map((keg, index) => {
                            return <div className="keg-details-col" key={index}>
                                <img className="beer-logo" src={keg.beerDetails.beer_label_hd || keg.beerDetails.beer_label} alt={keg.beerDetails.beer_name}/>
                                <div><div className='marquee'><i className = 'scroll-left'>{keg.beerDetails.beer_description}</i></div></div>
                            </div>
                        })}
                    </div>

                    <div className="keg-details-row footer">
                        {activeKegs.map((keg, index) => {
                            return <div className="keg-details-col" key={index}>
                                <KegStats keg={keg} />
                            </div>
                        })}
                    </div>
                </div>
            }
            {activePage === 1 && 
                <Charts />
            }
    </div> : <Spinner />
});