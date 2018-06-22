import React, { Component } from 'react'
import { Row, PageHeader } from 'react-bootstrap';
import { Grid, Row } from 'react-bootstrap';

export default class FarmingSouls extends Component {
    render(){
        return (
            <Grid>
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
            </Grid>
        )
    }
}