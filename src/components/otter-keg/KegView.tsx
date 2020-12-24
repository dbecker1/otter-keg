import * as React from "react";

export const KegView = React.memo(function KegView(props: React.PropsWithChildren<any>) {
    let keg: any = props.keg;
    return <div>{keg.beer.beer_name}</div>
})