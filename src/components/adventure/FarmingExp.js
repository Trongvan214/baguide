import React, { Component } from 'react'
import { Grid, Row, PageHeader, Image, Col, Table } from 'react-bootstrap';
import farmingpartnersstage from '../img/farmingpartnersstage.JPG';
import aidpartner from '../img/aidpartner.JPG';
import foodpartner from '../img/foodpartner.JPG';
import battlepartner from '../img/battlepartner.JPG';
import farmingwith1partner from '../img/farmingwith1partner.JPG';
import farmingwith4partner from '../img/farmingwith4partner.JPG';
import perfectexpfarming from '../img/perfectexpfarming.JPG';
import realityexpfarming from '../img/realityexpfarming.JPG';
import increasingstars from '../img/increasingstars.JPG';
import _1starpartner from '../img/1starpartner.JPG';
import _2starspartner from '../img/2starspartner.JPG';
import _3starspartner from '../img/3starspartner.JPG';
import _4starspartner from '../img/4starspartner.JPG';
// import _5starspartner from '../img/5starspartner.JPG';
import map from '../img/map.PNG';
import './FarmingExp.css';

export default class FarmingExp extends Component {
    render(){
        const { islandInfo } = this.props;
        return (
        <Grid className="fe">
            <PageHeader>
                Farming Exp
            </PageHeader>
            <Row className="fe-row vcenter">
                <Col mdOffset={1} md={8}>
                    <p>Farming exp is a very important if you want to have multiple 6 stars.</p>
                    <p>When it comes to farming exp, 
                    ideally you want 4 partners who isn't max level so they all can gain exp at the end.
                    </p>
                </Col>
                <Col md={2}>
                    <Image src={perfectexpfarming} responsive/>
                </Col>
            </Row>
            <Row className="fe-row vcenter">
                <Col mdOffset={1} md={8}>
                    <p>But most of the time you will need 1-2 battle partner (definition below) to help clear stronger stages.
                        So you will usually have partners that's already max level and the exp giving would just be wasted.
                    </p>
                </Col>
                <Col md={2}>
                    <Image src={realityexpfarming} responsive/>
                </Col>
            </Row>
            <PageHeader>
                Functional types of partners
            </PageHeader>
            <Row className="fe-row fe-types">
                <Col md={4}>
                    <Image src={battlepartner} responsive/>
                    <h1>Battle partners</h1>
                    <p>Partners that you will use for combat usually high in stars and deck out in war patterns</p>
                </Col>
                <Col md={4}>
                    <Image src={foodpartner} responsive/>
                    <h1>Food partners</h1>
                    <p>Partners that you will use to upgrade the star of other partners usually lv 1</p>
                </Col>
                <Col md={4}>
                    <Image src={aidpartner} responsive/>
                    <h1>Aid partners</h1>
                    <p>Low stars partners (1-4 natural stars) 
                    that you will max it's level and raise it's stars and use as food partners later</p>
                </Col>
            </Row>
            <PageHeader>
                Food partners
            </PageHeader>
            <Row className="vcenter">
                <Col mdOffset={1} md={7}>
                    <p className="indent">Food partners are needed when you when you want to raise a star of for a partner.
                        The partner has to be max level and there's a certain number of partners (same stars) that must sacrifice.
                        And since those partners will just disppear and doesn't need to be at any specific level.
                        It's best and efficient to just keep them lvl 1. 
                        The best food partners to use and sacrifice are the aid partners. 
                        These partners are less expensive than actually trying to find the material. 
                        Some of those material are expensive like natural 4-5 stars and if you were to wait from them and not use aid partners,
                        it will take a while.
                    </p>
                </Col>
                <Col md={3}>
                    <Image src={increasingstars} responsive/>
                </Col>
            </Row>
            <PageHeader>
                Aid partners
            </PageHeader>
            <Row className="fe-row fe-aid-explain">
                <Col md={3}>
                    <Image src={_1starpartner} responsive/>
                </Col>
                <Col md={3}>
                    <Image src={_2starspartner} responsive/>
                </Col>
                <Col md={3}>
                    <Image src={_3starspartner} responsive/>
                </Col>
                <Col md={3}>
                    <Image src={_4starspartner} responsive/>
                </Col>
            </Row>
            <Row className="fe-row">
                <Col md={12}>
                    <p className="indent">From the list above you can see 4 different aid partners from 1-4 stars, 
                        natural stars means that's the amount of stars the partner starts with before any star upgrades.</p>
                    <p className="indent">First off, 5 stars can't be aid partners. Because once you max and turn it into a 6 stars,
                            there isn't a 6 stars food partner to sacrifice. 
                            Because some partners are super hard to get like 5 stars from divide, 
                            it's easier to turn a 3 stars into a 5 stars and that's what aid partners are. 
                            Partners you turn into higher stars partners because it's easier then finding them.
                            The best aid partners are 3 stars 
                            because its not too low in stars to the point where 
                            it takes forever to turn into a high stars food partners. 
                            And it's not too high where you can only find the partners by spinning turtles.
                            This is why aid partners are to use to sacrifice as food partners.
                    </p>
                </Col>
            </Row>
            <PageHeader>
                Farming aid partners
            </PageHeader>
            <Row className="fe-row vcenter">
                <Col md={8}>
                <p className="indent">
                    If you are using the strategy for farming exp you will find yourself needing alot
                    3 stars to use as aid and food partners. One of the best spot that I found to farm 3 stars partners
                    is Cave 8-1 Normal mode. The only partners you can get are 3 stars partners on this island.
                    The reason why normal is because, in normal mode you can't get 15min speed up, so there odds are better.
                    It's so cheaper and only cost 3 energy.
                </p>
                </Col>   
                <Col md={4}>
                    <Image src={farmingpartnersstage} responsive/>
                </Col>
            </Row>
            <PageHeader>
                Tips
            </PageHeader>
            <Row className="fe-row vcenter">
                <Col mdOffset={1} md={4}> 
                    <p>One thing that alot of people probably doesn't know is that clearing a stage gives a total amount of exp, 
                        and this total is split evenly to how many partners used. </p>
                </Col>
                <Col md={3}>
                    <Image src={farmingwith1partner} responsive/>
                </Col>
                <Col md={3}>
                    <Image src={farmingwith4partner} responsive/>
                </Col>
            </Row>
            <PageHeader>
                Table for Exp
            </PageHeader>
            <Row className="fe-row">
                <Col md={12}>
                    <p>This is a table for the last stage on purgatory and using 4 partners to clear. 
                        So looking at table you know which one is the best to farm in.
                    </p>
                </Col>
            </Row>
            <Row className="fe-row vcenter fe-table">
                <Col mdOffset={1} md={7}>
                    <h1>Last stage on Purgatory statistic</h1>
                    <Table responsive bordered>
                        <thead>
                            <tr>
                                <th>Island</th>
                                <th>Exp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                islandInfo.map(island => (
                                    <tr key={island.islandName}>
                                        <td>{island.islandName}</td>
                                        <td>{island.exp}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md={3}>
                    <Image src={map} responsive/>
                </Col>
            </Row>   
        </Grid>
        )
    }
}