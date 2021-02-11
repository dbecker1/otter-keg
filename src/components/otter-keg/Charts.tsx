import * as React from "react";
import { useSelector } from "react-redux";
import { useFirebaseConnect } from "react-redux-firebase";
import { OtterKegState } from "../../state/OtterKegState";
//import { IoLogoGameControllerA } from 'react-icons/Io'
import "../../styles/otter-keg/Charts.scss";
import { ComposedChart, ResponsiveContainer, Legend, XAxis , YAxis, Area, Label} from 'recharts';
// import 'react-virtualized/styles.css';
const LITERS_TO_PINTS = 2.11338;
function getActiveIndex(drinkers: any[]): number {
    for (let i in drinkers) {
        if (drinkers[i].isActive)
            return Number(i);
    }
    return -1;
}
export const Charts = React.memo(function Charts() {
    let [totalView, setTotalView] = React.useState(false);
    let drinkersRaw: any = useSelector((state: OtterKegState) => state.firebase.data.drinkers) ?? {};
    let drinkers = Object.keys(drinkersRaw).map((key, index) => {
        let drinker = {
            ...drinkersRaw[key]
        };
        drinker["drinkerId"] = key;
        return drinker
    })
    console.log(drinkersRaw)
    console.log(getActiveIndex(drinkers))
    //useFirebaseConnect("drinkers");
    // this probably isn't a good idea ¯\_(ツ)_/¯
    useFirebaseConnect([{
        path: "pours", 
        queryParams: [ 'orderByChild=isCurrent', "equalTo=false" ],
    }]);

    // let drinkersRaw: any = useSelector((state: OtterKegState) => state.firebase.data.drinkers) ?? {};
    let poursRaw: any = useSelector((state: OtterKegState) => state.firebase.data.pours) ?? {};
    
    let newData: any = []

    function keycheckTotal(e: any) {
        console.log(e.KeyCode)
        if (e.keyCode === 65) {
            setTotalView(!totalView)
        } 
    }

    React.useEffect(() => {
        window.addEventListener("keydown", keycheckTotal);
        return () => {
            window.removeEventListener("keydown", keycheckTotal)
        }
    })

    function _isContains(json: any, value:any) {
        let contains = false;
        Object.keys(json).some(key => {
            contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
             return contains;
        });
        return contains;
     }
    Object.keys(poursRaw).forEach((pourId) => {
        let pour = poursRaw[pourId];
        if (pour["drinkerId"] === drinkers[getActiveIndex(drinkers)]["drinkerId"] || totalView) {
        let date = new Date(pour["start"]);
        if (!_isContains(newData, date.toDateString())) {
            newData.push({'date': date.toDateString(), 'amount': pour['amount']*LITERS_TO_PINTS})
        } else {
            var i: number = newData.findIndex( (e :any) => e.date === date.toDateString())
            newData[i]["amount"] += pour['amount']*LITERS_TO_PINTS
    }}
});
let c:number = 0;
newData = newData.map( (x:any) => ({...x,"total":c+=x.amount}) )
    console.log(newData);
    let renderLabel = function(entry : any) {
        console.log(entry)
        return entry.value;
    }
    return  <div className="charts" >
        <ResponsiveContainer width="80%" height="80%">
            <ComposedChart data={newData}>
            
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.6}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.6}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
                </defs>
                {/* <CartesianGrid strokeDasharray="1 3" /> */}
            <YAxis></YAxis>
            <XAxis dataKey="date">
            <Label value={totalView ? "Total": drinkers[getActiveIndex(drinkers)].name} position='top' offset = {30} style={{ textAnchor: 'middle', fontSize: '2em', padding: '40px', fill: 'rgba(200, 200, 200, 0.87)' }}></Label>
            <Label value={"Use A to switch to ".concat(!totalView ? "Total": drinkers[getActiveIndex(drinkers)].name)} position='top' style={{ textAnchor: 'middle', fontSize: '1em', padding: '40px', marginTop:'1em', fill: 'rgba(200, 200, 200, 0.87)' }}/>
            </XAxis>
            <Legend></Legend>
            <Area type="monotoneX" dataKey="total" animationEasing='ease-out' stroke="#8884d8" fillOpacity={.9} fill="url(#colorUv)" dot={true} label={renderLabel}>
                </Area>
            <Area type="monotone" dataKey="amount" stroke="#82ca9d" fillOpacity={.9} fill="url(#colorPv)" dot={true}/>
            </ComposedChart>
            </ResponsiveContainer>

</div>
});
