import React, { Component } from 'react';
import { Grid, Row, Tabs, Tab } from 'react-bootstrap';
import './AdventureFarming.css';
// import FarmingIntro from './FarmingIntro';
import FarmingPatterns from './FarmingPatterns';
import FarmingSouls from './FarmingSouls';
import FarmingExp from './FarmingExp';

export default class AdventureFarming extends Component {
    state = {
        islandInfo: [],
    }
    componentDidMount(){
        let islandNameArr = ["Riverside", "Mount", "Plain", "Ice Lake", "Forest", "Battlefield", "Seaside", "Cave"];
        let expArr = [1692, 1316, 1666, 1980, -1, 1518, -1, -1];
        let soulsArr = [1674, 1302, 1301, 2004, -1, 1710, -1, -1];
        let sellingArr = ["#", "#", "#", "#", "#", "#", "#", "#"];
        let islandInfo = [];
        for(let i = 0; i < 8; i++){
            islandInfo.push({
                "islandName": islandNameArr[i],
                "exp": expArr[i],
                "souls": soulsArr[i],
                "selling": sellingArr[i],
            });
        }
        this.setState({islandInfo});
    }
    render(){
        return (
            <Grid className="af">
                <Row>
                    <Tabs defaultActiveKey={1} id="adventurefarming">
                        {/* <Tab eventKey={1} title="Introduction">
                            <FarmingIntro />
                        </Tab> */}
                        <Tab eventKey={1} title="Exp">
                            <FarmingExp islandInfo={this.state.islandInfo} />
                        </Tab>
                        <Tab eventKey={2} title="Patterns">
                            <FarmingPatterns />
                        </Tab>
                        <Tab eventKey={3} title="Souls">
                            <FarmingSouls islandInfo={this.state.islandInfo} />
                        </Tab>
                    </Tabs>
                </Row>
            </Grid>           
        )
    }
}