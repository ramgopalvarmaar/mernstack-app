import React, { Component } from 'react';
import { faAlignJustify,faCalendarDay,faLink,faMicrophone,faBell,faTasks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container,Col,Row, ListGroup, ListGroupItem} from 'reactstrap';


class SideBar extends Component {
    render() {
        return (
            <Container fluid >
                <Col id="Menu" md="2">
                <span class="navLabel">Pick your tool here</span>
                <hr/>
                <ListGroup>
                    <Row>
                    <ListGroupItem active tag="button" action>
                    <FontAwesomeIcon icon={faAlignJustify} size ="2x"/>
                    <span class="navLabel">Notes</span>
                    </ListGroupItem>
                    </Row>
                    <Row>
                    <ListGroupItem tag="button" action>
                    <FontAwesomeIcon icon={faCalendarDay} size ="2x"/>
                    <span class="navLabel">Calender</span>
                    </ListGroupItem>
                    </Row>
                    <Row>
                    <ListGroupItem tag="button" action>
                    <FontAwesomeIcon icon={faLink} size ="2x"/>
                    <span class="navLabel">Links</span>
                    </ListGroupItem>
                    </Row>
                    <Row>
                    <ListGroupItem tag="button" action>
                    <FontAwesomeIcon icon={faMicrophone} size ="2x"/>
                    <span class="navLabel">Voice Notes</span>
                    </ListGroupItem>
                    </Row>
                    <Row>
                    <ListGroupItem tag="button" action>
                    <FontAwesomeIcon icon={faBell} size ="2x"/>
                    <span class="navLabel">Reminder</span>
                    </ListGroupItem>
                    </Row>
                    <Row>
                    <ListGroupItem tag="button" action>
                    <FontAwesomeIcon icon={faTasks} size ="2x"/>
                    <span class="navLabel">To Do</span>
                    </ListGroupItem>
                    </Row>
                </ListGroup>
                </Col>
            </Container>
        )
    }
}

export default SideBar;


