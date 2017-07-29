import React from 'react';
import { Jumbotron, Grid, Row, Col} from 'react-bootstrap';

const Skills = () => {
  return (
    <Jumbotron>
      <Grid>
        <Row>
          <Col md={12} xs={10} xsOffset={1}>
            <h2 id="skills">Skills</h2>
            <Col md={4} mdOffset={2} xs={10} xsOffset={1}>
            </Col>
            <Col md={4} xs={10} xsOffset={1}>
            </Col>
          </Col>
        </Row>
      </Grid>

    </Jumbotron>
  );
};

export default Skills;