import * as React from "react";
import "../../styles/otter-keg/OtterKegHeader.scss";
import pbu from "../../assets/pbu_40_white.png";

export const OtterKegHeader = React.memo(function OtterKegHeader() {
    function getTimeToDrinkCity(): string {
        var currentHourUTC = (new Date()).getUTCHours()
        var UTCOffsetRequired = ((currentHourUTC - 17) * -1).toString()
        var timeToDrinkString = "Its 5 O'Clock in "
        const UTCOffsetList: any = {
                            "-12":["Baker Island, USA"], 
                            "-11":["American Samoa"],
                            "-10":["Honolulu - Okole Maluna!"],
                            "-9":["Anchorage"],
                            "-8":["Los Angeles", "Vancouver", "Tijuana - AKA tequila time!"],
                            "-7":["Denver - Grab me a Coors... its mountain time!"],
                            "-6":["Chicaco", "Mexico City, Salud!", "Guatemala City"],
                            "-5":["Arlington - Giddy up!", "DC - Time to stop working!", "here - right now!"],
                            "-4":["Santiago"],
                            "-3":["Buenos Aires - Saude!", "Sao Paulo - Saude!"],
                            "-2":["the South Sandwich Islands - Maybe its snack time?"],
                            "-1":["Cape Verde - txin-txin!", "Greenland - Kasuutta!"],
                            "0":["London - Cheers!", "Dublin - Slainte!", "Dublin - Time for a Guiness?"],
                            "1":["Berlin - Prost!", 'Rome - Cin cin!', 'Paris - Bon appetit!'],
                            "2":["Cairo - Fe sehaetak!", "Johannesburg - Drie skreeu!", "Athens - Eviva!"],
                            "3":["Moscow - Nostrovia!", "Moscow - AKA vodka time!"],
                            "4":["Dubai - Pour one out for the UAE"],
                            "5":["Karachi"],
                            "6":["Dhaka - Where is that again?"],
                            "7":["Bangkok - Chai-yoh!"],
                            "8":["Shanghai - Ganbei!"],
                            "9":["Tokyo - Kanpai!", "Seoul - Geonbae!"],
                            "10":["Sydney - G'day mate!"],
                            "11":["Magadan - Grab your sweater!"],
                            "12":["Auckland - Cheers!"]}
         
        timeToDrinkString += UTCOffsetList[UTCOffsetRequired][Math.floor(Math.random() * UTCOffsetList[UTCOffsetRequired].length)]
        return timeToDrinkString
    }
    let [timeToDrinkString, setTimeToDrinkString] = React.useState(getTimeToDrinkCity());
    function callEveryHour() :any {
        setInterval(() => setTimeToDrinkString(getTimeToDrinkCity()), 1000 * 60*60);
    }
    var nextDate = new Date();
    if (nextDate.getMinutes() === 0) {
        callEveryHour()
    } else {
    nextDate.setHours(nextDate.getHours() + 1);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);
    var difference :number = nextDate.getTime() - (new Date()).getTime();
    setTimeout(callEveryHour(), difference);
    }
    return (
        <div className="otter-keg-header">
            <span>Otter Keg</span>
            <h3>{timeToDrinkString}</h3>
            <img src={pbu} alt={"Powered by Untappd"} />
        </div>
        );
});