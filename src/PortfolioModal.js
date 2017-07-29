import React, { Component } from "react";
import {
  Image,
  Button,
  Modal
} from "react-bootstrap";


class PortfolioModal extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  close = () => {
    this.setState({ showModal: false });
  };

  open = e => {
    this.setState({ showModal: true });
  };

  render() {
    const { project } = this.props;

    return (
      <div>
        <Button block bsStyle="primary" onClick={this.open}>
          View Details
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
          <Modal.Title>
            {project.name}
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={project.imageURL} responsive thumbnail />
            <h4>Description</h4>
            <p>{project.description}</p>
            <h4>Technologies Used</h4>
            <p>{project.tech}</p>
            <a href={project.deploymentURL} target="_blank" className="modal-links">
              <Button bsStyle="success">Live Demo</Button>
            </a>
            <br />
            <a href={project.githubURL} target="_blank" className="modal-links">
              <Button bsStyle="primary">Source Code</Button>
            </a>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={this.close} bsStyle="info">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default PortfolioModal;