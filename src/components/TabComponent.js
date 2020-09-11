import React, { useState } from 'react';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PersonalContent from "./notes/PersonalContent"
import OrganizationContent from "./notes/OrganizationContent"

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  let activeMenu = props.activeMenu;
  console.log("######### activeMenu ####");
  console.log(activeMenu);

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
          </Row>
          <Row>
          <div style={{ width: "90%"}}>
          {activeMenu === "notes" && <PersonalContent/>}
          {activeMenu === "voice-notes" && <h1> Personal Voice Notes here </h1>}
          {activeMenu === "reminder" && <h1> Personal Reminders here </h1>}
          {activeMenu === "to-do" && <h1> Personal To-Do here </h1>}
          {activeMenu === "calendar" && <h1> Personal Calendar here </h1>}
          {activeMenu === "links" && <h1> Personal Links here </h1>}
          </div>
          </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
            <Col sm="8">
              <h1>Organization Stuffs here</h1>
            </Col>
          </Row>
          <Row>
          <div style={{ width: "90%"}}>
          {activeMenu === "notes" && <OrganizationContent/>}
          {activeMenu === "voice-notes" && <h1> Work Voice Notes here </h1>}
          {activeMenu === "reminder" && <h1> Work Reminders here </h1>}
          {activeMenu === "to-do" && <h1> Work To-Do here </h1>}
          {activeMenu === "calendar" && <h1> Work Calendar here </h1>}
          {activeMenu === "links" && <h1> Work Links here </h1>}
          </div>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Tab;