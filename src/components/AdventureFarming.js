import React, { Component } from 'react';
import { Grid, Row, PageHeader, Col, Table, Tabs, Tab } from 'react-bootstrap';
import './css/AdventureFarming.css';

export default class AdventureFarming extends Component {
    state = {
        headingInfo: ["Island", "Exp", "Souls rewards", "Selling"],
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
        const { headingInfo, islandInfo } = this.state;
        return (
            <Grid>
                <Tabs defaultActiveKey={1} id="adventurefarming">
                    <Tab eventKey={1} title="Introduction">
                        <Col className="af-intro" md={5}>
                            <PageHeader>
                                Adventure Farming
                            </PageHeader>
                            <span>Before we start, I would to say this isn't a beginner's guide, 
                                I expect you guys to have some knowledge about partners, patterns.
                                Below you will find some of the strategies I use when doing adventure.
                            </span>
                        </Col>
                        <Col className="af-table" md={7}>
                            <h1>Last stage on Purgatory statistic</h1>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        {
                                            headingInfo.map(v => (
                                                <th key={v}>{v}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        islandInfo.map(island => (
                                            <tr key={island.islandName}>
                                                <td>{island.islandName}</td>
                                                <td>{island.exp}</td>
                                                <td>{island.souls}</td>
                                                <td>{island.selling}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Tab>
                    <Tab eventKey={2} title="Patterns">
                        <Row className="af-box">
                        <h1>Farming patterns</h1>
                        When you are farming for patterns, the best spot to farm is the last stage on purgatory with the big boss (cost 6 energy) of any island. 
                        This stage will give you higher rates for higher star patterns, and higher rates for greens, and blues patterns.
                        The bad side to it is that is you will get a random equiment type.
                        But trust me, when I say it's worth it. 
                        It might deplay your search, or even improve. 
                        As for the future, you would already have tons of greens, blues, whites 5 stars patterns to choose from.   
                        </Row>
                    </Tab>
                    <Tab eventKey={3} title="Souls">
                        <Row className="af-box">
                        <PageHeader>
                                Farming Souls
                            </PageHeader>
                            <p>
                                If you look at the chart (not here yet) you can see which islands will give you the most for your buck. 
                                But I would I like to say, before choosing, put in mind the exp the island gives and value of the patterns. 
                                There are some patterns that are more needed, so before choosing keep in mind about the future.  
                            </p>
                        </Row>
                    </Tab>
                    <Tab eventKey={4} title="Exp">
                        <Row className="af-box">
                            <PageHeader>
                                Farming Exp
                            </PageHeader>
                            <p>When it comes to farming exp, ideally you want 4 partners who isn't max level so they can gain exp at the end. 
                                for farming is to have 4 non-max level partners so all of the partners get exp at the end, 
                                but sometimes stages are too hard and required strong partners that's already max. 
                                So to make the best use of it, below is a strategy to use to be more efficient. 
                            </p>
                            <p>Before I explain here are some terms you need to know</p>
                            <p>Battle partners are partners that you will use for combat</p>
                            <p>Food partners are partners that you will use to upgrade the star of battle partners</p>
                            <p>Aid partners are low stars partners (1-4 stars) 
                                that you will max it's level and raise it's stars and use as food partners later.
                            </p>
                            <p>The best aid partners are 3 stars because its not too low in stars to the point where 
                                it takes forever to turn into a high stars food partners. 
                                And it's also not very hard to get I'll talk about how to farm these aid partners later.
                            </p>
                            <p>
                                Now for farming and making the best use of exp. The best strategy is to use 
                                just enough battle partners to be able to clear the stage, and fill the rest with aid partners.
                                This way you would get exp for those aid partners that you later use for food.
                            </p>    
                            <Table responsive>
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
                        </Row>
                        <Row className="af-box">
                            <h1>Farming aid partners</h1>
                            <p>
                                This is goes together with farming exp. If you are using the strategy for farming exp you will find yourself needing alot
                                3 stars to use as aid and food partners. One of the best spot that I found to farm 3 stars partners
                                is Cave 8-1 Normal mode. The only partners you can get are 3 stars partners on this island.
                                The reason why normal is because, in normal mode you can't get 15min speed up, so there odds are better.
                                It's so cheaper and only cost 3 energy.
                            </p>
                        </Row>
                    </Tab>
                    <Tab eventKey={5} title="Tips">
                    Tab 4 content
                    </Tab>
                </Tabs>
            </Grid>           
        )
    }
}