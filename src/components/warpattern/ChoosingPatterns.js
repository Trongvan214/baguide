import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader, Image } from 'react-bootstrap';
//patterns example
import ex1 from '../img/findingpattern1.JPG';
import ex2 from '../img/findingpattern2.JPG';
import ex3 from '../img/findingpattern3.JPG';
import ex4 from '../img/findingpattern4.JPG';
// compare 4 and 5 stars patterns 
import _4and5patterncompare from '../img/4and5patterncompare.JPG';
//table 
import BonusStatsTable from './BonusStatsTable';
//css 
import './ChoosingPatterns.css';

export default class ChoosingPatterns extends Component { 
    render(){
        return (
            <Grid>
                <PageHeader>
                    Choosing Patterns
                </PageHeader>
                <Row>
                    <Col md={12}>
                        <p className="indent">First of all, this is a guide on how to tell the different between a good and a great pattern.
                            Not which patterns to put on partners, that will not be covered in this guide.
                            For patterns it's obvious that 5 stars patterns are the best. 
                            "Wrong!" There's a little bit more to that and I'll explain it below.
                            Before I begin, I recommend you to read the stats tab first before proceeding to read this.
                            I will be splitting this into 2 parts finding main stats and finding bonus stats.
                        </p>
                        <p className="indent">First part is finding the main stats. Finding main stats is pretty simple you want to just find the % patterns
                            because most of the time they give more when the partners are max out at 6 stars than fixed amount would.
                            Due to the constrains on some equipments, we are forced to use fixed amount on some equipments
                            because there isn't any % available for them. The CRD, CR, HIT, RES is % base so they don't have fixed amount.   
                        </p>
                        <p className="indent"s>SPD is a special case, this only comes in fixed amount for the left hand, 
                            but it's very valuable and one of the hardest thing to find in adventure in my opinion.
                            The current META (Most Effective Tactic Available) right now is SPD combo, most the best combo have high SPD.
                            So if you find SPD patterns don't sell them.
                            Below is the chart which provides the details on what you can get for each equipment parts.
                        </p>
                        <p className="indent">When it comes finding bonus stats, there are some things you need to avoid.
                            most of the time you will want to avoid fixed amount of DEF, HP, ATK as a bonus,
                            those are pretty much useless and won't make much of a different. 
                            It's better to get the % one instead because the majority of the time it will give way more. 
                        </p>
                        <p className="indent">Knowing that you can should be able to distinguish good from bad patterns.
                            I will provide some example below, 
                            but remember just because it have great bonus stats doesn't mean it's the best for the partner.
                            For each partner most of the time there's specific stats you want, which won't be covered in this guide.
                        </p>
                    </Col>
                </Row>
                <Row className="cp-pattern-example">
                    <Col md={3}>
                        <Image src={ex1} responsive />
                    </Col>
                    <Col md={3}>
                        <Image src={ex2} responsive />
                    </Col>
                    <Col md={3}>
                        <Image src={ex3} responsive />
                    </Col>
                    <Col md={3}>
                        <Image src={ex4} responsive />
                    </Col>
                </Row>
                <PageHeader>
                    Bonus Stats Table
                </PageHeader>
                <BonusStatsTable />
                <PageHeader>
                    Tips
                </PageHeader>
                <Row className="vcenter">
                    <Col mdOffset={1} md={7}>
                        <p>Alot of people doesn't know this but you can use 4 and 5 stars on certain parts of the equipment without any major effect.
                            Those parts are the legs and body because they uses fixed amount as main stats, the different between a 4 and 5 wouldn't effect much.
                            As you can see in the picture the different in the main stats betweeen this 2 isn't much, a different in 13 defense.
                            But something that can be huge is the 4 stars patterns bonus because it can't go as high as 5 stars
                            but 4 stars are more easy to get and farmed. Most of the time a great 5 stars patterns with all 4 good bonus stats and good rarity and maxinum value is super hard to get,
                            so it's better just to get a super good 4 stars legs and body to use until you get the 5 stars patterns
                        </p>
                    </Col>
                    <Col md={3}>
                        <Image src={_4and5patterncompare} responsive />
                    </Col>
                </Row>
            </Grid>
        )
    }
}