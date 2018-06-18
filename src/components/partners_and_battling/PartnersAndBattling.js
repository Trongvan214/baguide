import React, { Component } from 'react';
import { Grid, Tab, Tabs } from 'react-bootstrap';
import PartnerAttributes from './PartnerAttributes';
import PartnerStats from './PartnerStats';
import BattlingBnDB from './BattlingBnDB';

export default class Battling extends Component {
    state = {
        key: "battling",
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
                    <Tab eventKey={"Partner"} title="Partner">
                        <PartnerStats />
                        <PartnerAttributes />
                    </Tab>
                    <Tab eventKey={"battling"} title="Battling">
                        <BattlingBnDB />
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