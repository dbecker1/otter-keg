import * as React from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { OtterKegState } from "../../state/OtterKegState";
import "../../styles/otter-keg/Charts.scss";
import {XYPlot, HorizontalGridLines, VerticalGridLines, XAxis, YAxis, LineSeries} from "react-vis";
import {AutoSizer} from 'react-virtualized';
// import 'react-virtualized/styles.css';

export const Charts = React.memo(function Charts() {
    useFirebaseConnect("drinkers");
    // this probably isn't a good idea ¯\_(ツ)_/¯
    useFirebaseConnect([{
        path: "pours", 
        queryParams: [ 'orderByChild=isCurrent', "equalTo=false" ],
    }]);

    // let drinkersRaw: any = useSelector((state: OtterKegState) => state.firebase.data.drinkers) ?? {};
    let poursRaw: any = useSelector((state: OtterKegState) => state.firebase.data.pours) ?? {};

    let chartData: any = {}
    Object.keys(poursRaw).forEach((pourId) => {
        let pour = poursRaw[pourId];
        let date = pour["start"].substring(0, 10);
        if (pour["drinkerId"] in chartData) {
            if (date in chartData[pour["drinkerId"]]) {
                chartData[pour["drinkerId"]][date] += pour["amount"]
            } else {
                chartData[pour["drinkerId"]][date] = pour["amount"]
            }
        } else {
            chartData[pour["drinkerId"]] = {}
            chartData[pour["drinkerId"]][date] = pour["amount"]
        }
    });
    console.log(chartData);
    return  <div className="charts">
        <AutoSizer>
            {({height, width}) => (
                <XYPlot xType="time" width={width * .8} height={height}>
                    <HorizontalGridLines />
                    <VerticalGridLines />
                    <XAxis title="X Axis" />
                    <YAxis title="Y Axis" />
                    {Object.keys(chartData).map((drinkerId) => {
                        return <LineSeries
                            data={Object.keys(chartData[drinkerId]).map((date) => {
                                return {
                                    x: new Date(date).getTime(),
                                    y: chartData[drinkerId][date]
                                }
                            })}
                        />
                    })}
                </XYPlot>
            )}
        </AutoSizer>
    </div>
});