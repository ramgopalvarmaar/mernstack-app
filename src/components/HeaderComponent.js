import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="2" id="col1"><span id="HeaderText">Organize</span></Col>
                    <Col id="TabColumn">
                        <Row>
                            <Col md={{ size: 1, offset: 11 }}><Button id ="AvatarBtn"outline color="secondary"><img id="Avatar" alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar2.png"/></Button></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default Header;
