import React, { Component } from 'react'
import { Grid, Tabs, Tab } from 'react-bootstrap';
import './WarPatterns.css';
import WarPatternStats from './WarPatternStats';
import WarPatternRarities from './WarPatternRarities';

export default class WarPatterns extends Component {
    render(){
        return (
            <Grid>
                <Tabs defaultChecked={1} id="wp-tabs">
                    <Tab eventKey={1} title="Stats">
                        <WarPatternStats />
                    </Tab>
                    <Tab eventKey={2} title="Rarities">
                        <WarPatternRarities />
                    </Tab>
                    <Tab eventKey={2} title="Choosing Patterns">
                        choosing pattern
                    </Tab>
                </Tabs>
            </Grid>
        )
    }
}