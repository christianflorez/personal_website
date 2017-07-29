import React from 'react';
import { Jumbotron, Image, Grid, Row, Col} from 'react-bootstrap';

const IntroJumbo = () => {
  return (
    <Jumbotron>
      <Grid>
        <Row>
          <Col md={3} mdOffset={1} xs={10} xsOffset={1}>
            <Image src="profile.jpg" circle responsive/>
          </Col>
          <Col md={6} mdOffset={1} xs={10} xsOffset={1}>
            <h1>Christian Florez</h1>
            <h2>Full Stack Developer</h2>
            <p></p>
          </Col>
        </Row>
      </Grid>

    </Jumbotron>
  );
};

export default IntroJumbo;