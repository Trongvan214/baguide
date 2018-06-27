import React, { Component } from 'react'
import { Table, Col, Row } from 'react-bootstrap';
import './EquipmentTable.css';

export default class EquipmentTable extends Component {
    state = {
        heading: ["Equipment Type", "HP", "ATK", "DEF", "SPD", "CR", "CRD", "RES", "HIT"],
        ETypes: [],
    }
    componentDidMount(){
        let names = ["HEAD", "LEFT HAND", "RIGHT HAND", "BODY", "LEFT LEG", "RIGHT LEG"];
        let HP = ["% and #", "% and #", "% and #", "", "", "#"];
        let ATK = ["% and #", "% and #", "% and #", "#", "", ""];
        let DEF = ["% and #", "% and #", "% and #", "", "#", ""];
        let SPD = ["", "#", "", "", "", ""];
        let CR = ["%", "", "", "", "", ""];
        let CRD = ["%", "", "", "", "", ""];
        let RES = ["", "", "%", "", "", ""];
        let HIT = ["", "", "%", "", "", ""];
        let ETypes = [];
        for(let i = 0; i < 6; i++){
            ETypes.push({
                "name": names[i],
                "hp": HP[i],
                "atk": ATK[i],
                "def": DEF[i],
                "spd": SPD[i],
                "cr": CR[i],
                "crd": CRD[i],
                "res": RES[i],
                "hit": HIT[i],
            });
        }
        this.setState({ETypes});
    }
    render(){
        const { heading, ETypes } = this.state;
        return (
            <Row className="et-table">
                <Col md={9}>
                    <Table responsive bordered>
                        <thead>
                            <tr>
                                {
                                    heading.map((type, index) => (
                                        <th key={index}>{type}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ETypes.map((type, index) => (
                                    <tr key={index}>
                                        <td>{type.name}</td>
                                        <td>{type.hp}</td>
                                        <td>{type.atk}</td>
                                        <td>{type.def}</td>
                                        <td>{type.spd}</td>
                                        <td>{type.cr}</td>
                                        <td>{type.crd}</td>
                                        <td>{type.res}</td>
                                        <td>{type.hit}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md={3}>
                    <h1>Key</h1>
                    <ul>
                        <li># = fixed amount</li>
                        <li>% = dynamic amount</li>
                    </ul>
                </Col>
            </Row>
        )
    }
}