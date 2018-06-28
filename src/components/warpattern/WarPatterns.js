import React, { Component } from 'react'
import { Grid } from 'react-bootstrap';
import './WarPatterns.css';
import WarPatternStats from './WarPatternStats';
import WarPatternRarities from './WarPatternRarities';
import WarPatternUpgrades from './WarPatternUpgrades'
import ChoosingPatterns from './ChoosingPatterns';

export default class WarPatterns extends Component {
    render(){
        return (
            <Grid className="wp">
                <WarPatternStats />
                <WarPatternRarities />
                <WarPatternUpgrades />
                <ChoosingPatterns />
            </Grid>
        )
    }
}