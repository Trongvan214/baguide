import React, { Component } from 'react'
import { Grid, Row, Col, PageHeader, Table } from 'react-bootstrap';
import './FarmingSouls.css';
export default class FarmingSouls extends Component {
    render(){
        const { islandInfo } = this.props;
        return (
            <Grid className="fs">
                <PageHeader>
                    Farming Souls
                </PageHeader>
                <Row className="fs-row vcenter">
                    <Col mdOffset={1} md={5}>
                        <p className="indent">
                            If you look at the chart (not here yet) you can see which islands will give you the most for your buck. 
                            But I would I like to say, before choosing, put in mind the exp the island gives and value of the patterns. 
                            There are some patterns that are more needed, so before choosing keep in mind about the future.  
                        </p>
                    </Col>
                    <Col md={5}>
                        <h1>Last stage on Purgatory statistic</h1>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Island</th>
                                    <th>Clearing Stage souls</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    islandInfo.map(island => (
                                        <tr key={island.islandName}>
                                            <td>{island.islandName}</td>
                                            <td>{island.souls}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Grid>
        )
    }
}