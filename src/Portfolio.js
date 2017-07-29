import React from 'react';
import {Grid, Row, Col, Panel, Image} from 'react-bootstrap';
import data from './data';
import PortfolioModal from './PortfolioModal';

const buildPortfolio = () => {
  return data.portfolio.map(project => (
    <Col md={4} xs={12} key={project.name}>
      <Panel>
      <Image src={project.imageURL} responsive thumbnail />
      <h3>{project.name}</h3>
      <PortfolioModal project={project}/>
      </Panel>
    </Col>
  ));
};

const Portfolio = () => {
  let portfolioPanels = buildPortfolio();
  return (
    <Grid>
      <Row>
        <Col md={12} xs={10} xsOffset={1}>
          <h2 id="portfolio">Portfolio</h2>
          {portfolioPanels}
        </Col>
      </Row>
    </Grid>
  )
};

export default Portfolio;