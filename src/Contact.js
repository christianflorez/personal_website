import React from 'react';
import { Grid, Row, Col, Media} from 'react-bootstrap';
import FontAwesome from "react-fontawesome";

const Contact = () => {
  return (
    <footer>
      <Grid>
        <Row>
          <Col md={9} xs={10} xsOffset={1}>
            <h2 id="contact">Contact</h2>
            <br />
            <Media>
              <Media.Left>
              <FontAwesome name="github" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>GitHub</Media.Heading>
                <a href="https://github.com/christianflorez"><p>View my projects and repos on GitHub</p></a>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
              <FontAwesome name="linkedin" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>LinkedIn</Media.Heading>
                <a href="https://www.linkedin.com/in/christianflorez/"><p>Learn more about my experience on LinkedIn</p></a>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
              <FontAwesome name="medium" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Medium</Media.Heading>
                <a href="https://medium.com/@christianflorez"><p>Read my most recent blog posts on Medium</p></a>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
              <FontAwesome name="codepen" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>codePen</Media.Heading>
                <a href="http://codepen.io/christianflorez/"><p>See my projects in action on CodePen</p></a>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
              <FontAwesome name="quora" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Quora</Media.Heading>
                <a href="https://www.quora.com/profile/Christian-Florez"><p>Read my answers to other people's questions on Quora</p></a>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
              <FontAwesome name="stack-overflow" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Stack Overflow</Media.Heading>
                <a href="http://stackoverflow.com/users/7565120/christian-florez"><p>View my StackOverflow profile</p></a>
              </Media.Body>
            </Media>
            <Media>
              <Media.Left>
              <FontAwesome name="envelope-o" size="2x" />
              </Media.Left>
              <Media.Body>
                <Media.Heading>Email</Media.Heading>
                <a href="mailto:hello@christianflorez.me" class="email-link"><p>Connect with me through e-mail</p></a>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Contact;