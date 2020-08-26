import React, { useState } from 'react';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs justified>
        <NavItem aria-expanded>
          <NavLink 
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Personal
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Work
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="8">
              <h1>Your Personal Stuffs here</h1>
            </Col>
            <Col sm="4">
            <Button><FontAwesomeIcon icon={faPlusCircle} size ="3x"/></Button>
            </Col>
          </Row>
          <Row>
          <Col sm="3">
              <Card body>
                <CardTitle>First List</CardTitle>
                <CardText></CardText>
                <Button >Add a Card</Button>
              </Card>
            </Col>
            <Col sm="3">
              <Card body>
                <CardTitle>Second List</CardTitle>
                <CardText></CardText>
                <Button>Add a Card</Button>
              </Card>
            </Col>
            <Col sm="3">
              <Card body>
                <CardTitle></CardTitle>
                <Button >Add a List</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="8">
              <h1>Organization Stuffs here</h1>
            </Col>
          </Row>
          <Row>
          <Col sm="3">
              <Card body>
                <CardTitle>First List</CardTitle>
                <CardText></CardText>
                <Button>Add a Card</Button>
              </Card>
            </Col>
            <Col sm="3">
              <Card body>
                <CardTitle>Second List</CardTitle>
                <CardText></CardText>
                <Button>Add a Card</Button>
              </Card>
            </Col>
            <Col sm="3">
              <Card body>
                <CardTitle></CardTitle>
                <Button>Add a List</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tab;