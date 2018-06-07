import React, { Component } from 'react';
import { Grid, Tab, Tabs } from 'react-bootstrap';

export default class AdventureFarming extends Component {
    render(){
        return (
            <Grid className="partners-buffdebuff-info">
                <Tabs defaultActiveKey={1} id="buffdebuff">
                    <Tab eventKey={1} title="Buffs/Debuffs">
                        <div className="partners-buff">
                            <h1>Here are the list of buffs you can get in the game</h1>
                            <p>ATK Enhance: <small>Increase ATK by 50%</small></p>
                            <p>DEF Enhance <small>Increase DEF by 70%</small></p>
                            <p>Speed Enhance: <small>Increase Speed by 30%</small></p>
                            <p>CR Rate Enhance: <small>Increase CR Rate by 30%</small></p>
                            <p>CR Res Enhance: <small>Reduce the chance of suffering CR by 50%</small></p>
                            <p>Enduring Healing: <small>Recover 15% of max HP in each round</small></p>
                            <p>Add Counter Blessing: <small>It can fight back with 75% ATK after being attacked</small></p>
                            <p>Immunity: <small>Immune to any debuff (it won't dispel the debuffs which are taking effect)</small></p>
                            <p>Damage Reflect: <small>Reflect 30% of received damage</small></p>
                            <p>Add Shield: <small>Add a shield which can absorb a certain amount of damage</small></p>
                            <p>Unyielding: <small>Unyielding will! HP just won't be lower than 1 when being attacked</small></p>
                            <p>Protection: <small>The target is protected by a teammate from any damage and the teammate takes 50% of the damage.</small></p>
                            <p>Nirvana: <small>Revive immediately to its 30% HP after being defeated</small></p>
                            <p>Energy Shield: <small>Cast shields for the team</small></p>
                        </div>
                        <div className="partners-debuff">
                            <h1>Here are the list of debuffs you can get in the game</h1>
                            <p>Blind: <small>It has a 50% chance to deflect the hit, which will reduce 30% of the dealing damage.</small></p>
                            <p>ATKReduce: <small>Reduce ATK by 50%</small></p>
                            <p>DEFReduce: <small>Reduce DEF by 70%</small></p>
                            <p>Slow: <small>Reduce Speed by 30%</small></p>
                            <p>Inertia: <small>Cannot get buffs</small></p>
                            <p>ThorCurse: <small>After the countdown, deal damage (Ignoring DEF)</small></p>
                            <p>Taunt: <small>Can only use the first skill to attack the taunter.</small></p>
                            <p>Sleep: <small>Enter Sleep status, and cannot take actions until attacked.</small></p>
                            <p>Poison: <small>Each round deal damage by 5% of the max HP.</small></p>
                            <p>Frozen: <small>Enter Frozen status, and cannot take actions</small></p>
                            <p>Stun: <small>Enter Stun status, and cannot take actions</small></p>
                            <p>Healing F<small>orbidden: Can't recover HP</small></p>
                            <p>Silence: <small>Cannot use skills with CD</small></p>
                            <p>Injury: <small>Receive additional damage by 25%</small></p>
                            <p>Amnesia: <small>Cannot trigger the passive skill</small></p>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Tips">
                        <p>talk about legion skill</p>
                    </Tab>
                </Tabs>
            </Grid> 
        )
    }
}