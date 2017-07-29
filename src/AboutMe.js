import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Grid>
      <Row>
        <Col md={9} xs={10} xsOffset={1}>
          <h2 id="about">About</h2>
          <br />
          <p>
            Growing up, the two biggest interests in my life were music and
            technology. My first job involved helping children at the local
            middle school learn how to build computers and use music technology.
            Learning to program always found its way on my goals list. I’ve had
            an unread copy of “PHP 5 for Dummies” sitting in my old room in my
            parents house since I was 15. I followed this passion for technology
            to college, where I majored in our school's music technology
            program. My large love for people (which puts me in the uncommon
            category of being an extroverted programmer!) led me to a second
            major in music business.
          </p>
          <p>
            After spending some time in the music industry, I realized that I
            needed to take the promise that old PHP book represented seriously.
            I took Harvard’s CS50 and within weeks I was implementing own binary
            search trees, sorting algorithms, and tries in C. I was completely
            in love. The feeling of creativity that came from building my own
            programs was incredibly similar to the feeling of writing and
            playing music. This marked my beginning in the exciting world of
            software development and engineering.
          </p>
        </Col>
      </Row>
    </Grid>
  );
};

export default AboutMe;
