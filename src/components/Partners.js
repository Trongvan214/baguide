import React, { Component } from 'react';
import { Grid, Row, Col, Tab, Tabs, Media, Image } from 'react-bootstrap';
import PartnersInBattle from './PartnersInBattle';
import PartnerStats from './PartnerStats';
import BuffDebuff from './BuffDebuff';
import './css/Partners.css';

export default class AdventureFarming extends Component {
    render(){
        return (
            <Grid className="partners-buffdebuff-info">
                <Tabs defaultActiveKey={1} id="buffdebuff">
                    <Tab eventKey={1} title="Stats">
                        <PartnerStats />
                    </Tab>
                    <Tab eventKey={2} title="Buffs/Debuffs">
                        <BuffDebuff />
                    </Tab>
                    <Tab eventKey={3} title="Battling">
                        <PartnersInBattle />
                    </Tab>
                    <Tab eventKey={4} title="Tips">
                        <p>talk about legion skill</p>
                        <p>talking about watching the fight to learn how they fight</p>
                        <p>Once you have alot of partners you will have to learn how to use them depending on other's partners
                            Because there isn't a combo that can't be counter and beated.
                        </p>
                    </Tab>
                </Tabs>
            </Grid> 
        )
    }
}