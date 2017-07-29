import React from 'react';
import { Jumbotron, Grid, Row, Col} from 'react-bootstrap';

const Skills = () => {
  return (
    <Jumbotron>
      <Grid>
        <Row>
          <Col md={12} xs={10} xsOffset={1}>
            <h2 id="skills">Skills</h2>
            <Col md={4} xs={10} xsOffset={1} mdOffset={0}>
              <h3>Front-End:</h3>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JavaScript (ES6 and ES7)</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>webpack</li>
                <li>Chrome DevTools</li>
              </ul>
            </Col>
            <Col md={4} xs={10} xsOffset={1} mdOffset={0}>
              <h3>Back-End:</h3>
              <ul>
                <li>Node</li>
                <li>Express</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>WebSockets</li>
                <li>Amazon S3</li>
                <li>OAuth</li>
                <li>Session-Based Authentication</li>
                <li>Testing with Jasmine</li>
              </ul>
            </Col>
            <Col md={4} xs={10} xsOffset={1} mdOffset={0}>
              <h3>Methodologies/Other:</h3>
              <ul>
                <li>Version Control with Git</li>
                <li>Heroku Deployment</li>
                <li>Entity Relationship Modeling</li>
                <li>Test Driven Development</li>
                <li>RESTful API Design</li>
                <li>Agile Development</li>
              </ul>
            </Col>
          </Col>
        </Row>
      </Grid>

    </Jumbotron>
  );
};

export default Skills;