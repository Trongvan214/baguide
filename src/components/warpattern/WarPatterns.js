import React, { Component } from 'react'
import { Grid, Tabs, Tab } from 'react-bootstrap';
import './WarPatterns.css';
import WarPatternStats from './WarPatternStats';
import WarPatternRarities from './WarPatternRarities';
import WarPatternUpgrades from './WarPatternUpgrades'
import ChoosingPatterns from './ChoosingPatterns';

export default class WarPatterns extends Component {
    render(){
        return (
            <Grid>
                <Tabs defaultActiveKey={1} id="wp-tabs">
                    <Tab eventKey={1} title="Stats">
                        <WarPatternStats />
                        <WarPatternRarities />
                        <WarPatternUpgrades />
                    </Tab>
                    <Tab eventKey={3} title="Choosing Patterns">
                        <ChoosingPatterns />
                    </Tab>
                </Tabs>
            </Grid>
        )
    }
}