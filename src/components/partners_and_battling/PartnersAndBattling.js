import React, { Component } from 'react';
import { Grid, Tab, Tabs } from 'react-bootstrap';
import PartnerAttributes from './PartnerAttributes';
import PartnerStats from './PartnerStats';
import PartnerSkills from './PartnerSkills';
import BattlingBnDB from './BattlingBnDB';

export default class Battling extends Component {
    state = {
        key: "partner",
    }
    componentWillMount(){
        let key = this.props.match.params.section;
        if(key){
            this.setState({key});
        }
    }
    handleSelect = (key) => {
        this.setState({key});
    }
    render(){
        return (
            <Grid className="partners-buffdebuff-info">
                <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="buffdebuff">
                    <Tab eventKey={"partner"} title="Partner">
                        <PartnerStats />
                        <PartnerSkills />
                        <PartnerAttributes />
                    </Tab>
                    <Tab eventKey={"battling"} title="Battling">
                        <BattlingBnDB />
                        <p>*reminder* talk about legion skill</p>
                        <p>*reminder* talk about learning from watching the fight</p>
                        <p>*reminder* talk about picking counter</p>
                    </Tab>
                </Tabs>
            </Grid> 
        )
    }
}