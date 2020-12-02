import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firebaseConnect, populate } from 'react-redux-firebase'
import {Container, Row, Col} from "react-bootstrap";


function KevView({admin}) {

    if (admin === undefined) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    const beers = admin.activeBeers
    return (
        <Container style={{height: "100%"}}>
            <Row style={{textAlign: "center"}}>
                <Col sm={12} md={6} style={{paddingTop: "15%"}}>
                    <h1>{beers[0].name}</h1>
                    <img src={beers[0].image} style={{width:  "70%"}} alt={beers[0].name}/>
                </Col>
                <Col sm={12} md={6} style={{paddingTop: "15%"}}>
                    <h1>{beers[1].name}</h1>
                    <img src={beers[1].image} style={{width:  "70%"}} alt={beers[0].name}/>
                </Col>
            </Row>
        </Container>
    )
}

const populates = [
    { child: 'activeBeers', root: 'beers' },
]

const enhance = compose(
    firebaseConnect([
        // passing populates parameter also creates all necessary child queries
        { path: 'admin', populates }
    ]),
    connect(({ firebase }) => ({
        // populate original from data within separate paths redux
        admin: populate(firebase, 'admin', populates),
        // firebase.ordered.todos or firebase.data.todos for unpopulated todos
    }))
)

export default enhance(KevView)