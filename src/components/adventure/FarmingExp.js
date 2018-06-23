import React, { Component } from 'react'
import { Grid, Row, PageHeader, Image, Col } from 'react-bootstrap';
import farmingpartnersstage from '../img/farmingpartnersstage.JPG';

export default class FarmingExp extends Component {
    render(){
        return (
        <Grid>
            <PageHeader>
                Farming Exp
            </PageHeader>
            <Row className="af-box">
                <Col>
                    <p className="indent">When it comes to farming exp, ideally you want 4 partners who isn't max level so they can gain exp at the end. 
                        for farming is to have 4 non-max level partners so all of the partners get exp at the end, 
                        but sometimes stages are too hard and required strong partners that's already max. 
                        So to make the best use of it, below is a strategy to use to be more efficient. 
                    </p>
                </Col>
            </Row>
            <Row className="af-box">
                <Col md={12}>
                <p>Before I explain here are some terms you need to know</p>
                <ul>
                    <li>Battle partners are partners that you will use for combat</li>
                    <li>Food partners are partners that you will use to upgrade the star of battle partners</li>
                    <li>Aid partners are low stars partners (1-4 stars) 
                    that you will max it's level and raise it's stars and use as food partners later</li>
                </ul>
                </Col>
            </Row>
            <Row className="af-box">
                <Col md={12}>
                    <p>The best aid partners are 3 stars because its not too low in stars to the point where 
                        it takes forever to turn into a high stars food partners. 
                        And it's also not very hard to get I'll talk about how to farm these aid partners later.
                    </p>
                </Col>
            </Row>
            <Row className="af-box">
                <Col md={12}>
                <p>Before I explain here are some terms you need to know</p>
                    <p>
                        Now for farming and making the best use of exp. The best strategy is to use 
                        just enough battle partners to be able to clear the stage, and fill the rest with aid partners.
                        This way you would get exp for those aid partners that you later use for food.
                    </p>  
                </Col>
            </Row>  
            <Row className="vcenter">
                <Col md={8}>
                <h1>Farming aid partners</h1>
                <p>
                    This is goes together with farming exp. If you are using the strategy for farming exp you will find yourself needing alot
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
        </Grid>
        )
    }
}